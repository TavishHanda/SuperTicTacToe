import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const [roomCode, setRoomCode] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const socket = io('http://localhost:3001');

    socket.on('connect', () => {
      console.log('Connected to server:', socket.id);
    })

    return () => socket.disconnect();
  })
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="text-5xl text-red-600 font-bold"> Super Tic Tac Shiv</h1>


      <div className="flex items-center gap-2">
        <input
          type="text"
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value)}
          placeholder="Enter room code"
          className="px-4 py-2 border border-gray-300 rounded-lg"
        />
        <button className="bg-green-600 px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition"
          onClick={() => {
            if (roomCode.trim() !== "") {
              // Navigate to the game room with the entered code
              navigate(`/game/${roomCode}`);
            }
          }}
        >
          Join Game
        </button>

              <button className="bg-blue-600 px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
        onClick={() => {
          const newCode = Math.random().toString(36).substring(2, 8);
          navigate(`/game/${newCode}`); // Navigate to the game room with the new code
        }}
      >
        Create Game
      </button>
        </div>
    </div>
  );
}

export default LandingPage
