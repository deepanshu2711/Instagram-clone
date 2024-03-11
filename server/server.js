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

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
})