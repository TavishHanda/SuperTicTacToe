import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import './App.css'

function App() {
  useEffect(() => {
    const socket = io('http://localhost:3001');

    socket.on('connect', () => {
      console.log('Connected to server:', socket.id);
    })

    return () => socket.disconnect();
  })
  return <div className="text-2xl p-10">Super Tic Tac Toe - Hello!</div>;
}

export default App
