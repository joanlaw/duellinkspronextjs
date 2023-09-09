import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useUser } from "../../contexts/UserContext";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, useDisclosure } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react"; // Importa el componente Avatar de Next UI

function ChatRoom({ roomId, onClose }) {
  const { discordId, token, username, userImage  } = useUser();
  console.log("Valores desde el contexto:", { discordId, token, username, userImage  });
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
    }, 3000); // Cada 5 segundos
  
    return () => clearInterval(interval);
  }, [roomId]);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  

  const handleSendMessage = async () => {
      // Agrega el console.log aquí para ver el valor de avatar
  console.log("Avatar:", userImage );
    if (newMessage.trim() === "") return;
  
    try {
      const messageData = {
        content: newMessage,
        username: username,
        avatar: userImage  // Usar userImage aquí
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
  
      setMessages([...messages, { content: newMessage, sender: { username, userImage , discordId } }]); // Agrega avatar aquí también
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

  const handleSendAlert = async () => {
    try {
      const alertData = {
        message: "Tu mensaje de alerta aquí", // puedes personalizar este mensaje
      };
  
      const response = await axios.post(
        `https://api.duellinks.pro/chat-rooms/${roomId}/alert`,
        alertData
      );
  
      console.log("Alerta enviada:", response.data);
    } catch (error) {
      console.error("Error al enviar la alerta:", error);
    }
  };
  

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
              <div className="flex items-center space-x-2">
                <Avatar src={message.sender.avatar } size="sm" /> {/* Mostrar avatar */}
                <strong>{message.sender.username}: </strong> {message.content}
              </div>
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
            <Button color="warning" onPress={handleSendAlert}>Enviar Alerta</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;
