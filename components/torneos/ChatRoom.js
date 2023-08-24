import { Chat, ChatMessage } from '@nextui-org/chat';

function ChatRoom({ roomId, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-black">
      <div className="bg-white rounded-lg p-8 w-full md:w-2/3 lg:w-1/2 shadow-lg">
        <h2 className="text-2xl mb-6 text-black">Sala de Chat</h2>
        <Chat roomId={roomId} />
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
