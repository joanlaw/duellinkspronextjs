import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "../../contexts/UserContext";  // Importar el hook useUser

function ChatRoom({ roomId, onClose }) {
  const { discordId, token, username } = useUser();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

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

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-black">
      <div className="bg-white rounded-lg p-8 w-full md:w-2/3 lg:w-1/2 shadow-lg">
        <h2 className="text-2xl mb-6 text-black">Sala de Chat</h2>
        <div className="h-60 overflow-y-auto border border-gray-300 p-4">
        {messages.map((message, index) => (
  <div
    key={index}
    className={`mb-2 p-2 bg-white text-black rounded-md ${
      message.sender.discordId === discordId // Compara con el discordId del usuario actual
        ? "self-start"
        : "self-end"
    }`}
  >
    <strong>{message.sender.username}: </strong> {message.content}
  </div>
))}
        </div>
        <div className="flex mt-4">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 border rounded-md p-2 mr-2"
            placeholder="Escribe un mensaje..."
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Enviar
          </button>
        </div>
        <button
          onClick={onClose}
          className="mt-6 p-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default ChatRoom;
