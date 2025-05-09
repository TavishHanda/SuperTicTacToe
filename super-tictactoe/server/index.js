const express = require('express')
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

// express app and http server
const app = express();
const httpServer = http.createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        credentials: true,
    }
});

// Middleware

app.use(cors());

// Socket.IO connection handler

io.on("connection", (socket) => {
    console.log("New client connected:", socket.id);

    socket.on("disconnect", () => {
        console.log("Client disconnected:", socket.id);
    });

    // Add your game logic here, e.g., handling moves, game state, etc.
    socket.on("makeMove", (data) => {
        console.log("Move made:", data);
        // Broadcast the move to other clients
        socket.broadcast.emit("moveMade", data);
    });
});

// Start the server
const PORT = process.env.PORT || 3001;
httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
