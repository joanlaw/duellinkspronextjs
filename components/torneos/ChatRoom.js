import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useUser } from "../../contexts/UserContext";  // Importar el hook useUser
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, useDisclosure } from "@nextui-org/react";

function ChatRoom({ roomId, onClose }) {
  const { discordId, token, username } = useUser();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const lastMessageRef = useRef(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.duellinks.pro/chat-rooms/${roomId}/messages`);
        setMessages(response.data);
      } catch (error) {
        console.error("Error al cargar los mensajes:", error);
      }
    };
  
    fetchData();
  
    const interval = setInterval(() => {
      fetchData();
    }, 5000); // Cada 5 segundos
  
    return () => clearInterval(interval);
  }, [roomId]);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  

  const handleSendMessage = async () => {
    if (newMessage.trim() === "") return;

    
  console.log("Antes de enviar, verificando los datos:");
  console.log("newMessage:", newMessage);
  console.log("discordId:", discordId);
  console.log("username:", username);  // Asegúrate de que esta variable exista
  console.log("token:", token);

    try {
      const messageData = {
        content: newMessage,
        username: username, // Asegúrate de que username está disponible en el contexto
      };

      const response = await axios.post(
        `https://api.duellinks.pro/chat-rooms/${roomId}/send-message`,
        messageData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            discordId: discordId,
          },
        }
      );

      // Actualizar el estado local con el nuevo mensaje
      setMessages([...messages, { content: newMessage, sender: { username, discordId } }]);

      setNewMessage("");
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
    }
  };

  const handleClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setNewMessage(prevMessage => prevMessage + text);
    } catch (err) {
      console.error('Falló la lectura del portapapeles:', err);
    }
  }
  return (
<div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-black">
  <div className="bg-gray-900 rounded-lg p-8 w-full md:w-2/3 lg:w-1/2 shadow-lg">
    <h2 className="text-2xl mb-6 text-white">
      Sala de Chat
    </h2>
    <div className="h-60 overflow-y-auto border border-gray-300 p-4">
      {messages.map((message, index) => (
        <div
          ref={index === messages.length - 1 ? lastMessageRef : null}
          key={index}
          className={`mb-2 p-2 bg-gray-800 text-white rounded-md ${
            message.sender.discordId === discordId ? 'self-start' : 'self-end'
          }`}
        >
          <strong>{message.sender.username}: </strong> {message.content}
        </div>
      ))}
    </div>
    <div className="flex mt-4">
      <Input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSendMessage();
            e.preventDefault();
          }
        }}
        placeholder="Escribe un mensaje..."
        width="100%"
        dark
      />
      <Button color="primary" onPress={handleSendMessage}>Enviar</Button>
    </div>
    <div className="flex justify-between mt-6">
      <Button color="danger" onPress={onClose}>Cerrar</Button>
      <div className="space-x-4">
        <Button color="primary" onPress={handleClipboard}>Pegar Sala</Button>
        <Button color="primary" onPress={() => { /* Aquí irá la función para llamar al moderador */ }}>Llamar Mod</Button>
      </div>
    </div>
  </div>
</div>
  );
}

export default ChatRoom;
