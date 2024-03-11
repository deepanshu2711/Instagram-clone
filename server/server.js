import { Server } from "socket.io";

const io = new Server();

io.listen(3000, {
    cors: {
        origin: 'http://localhost:3001',
        methods: ['GET', 'POST']
    }
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on("comment", (data) => {
        io.emit("comment", data)
    })

    socket.on("like", (data) => {
        io.emit("like", data)
    })

    socket.on("dislike", (data) => {
        io.emit("dislike", data)
    })

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
})