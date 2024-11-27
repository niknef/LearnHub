import io from 'socket.io-client';
const socketIO = io("http://localhost:3333")
export default socketIO