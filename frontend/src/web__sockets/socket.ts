import { io, Socket } from 'socket.io-client';

export const socket: Socket = io(process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:81/', {
  forceNew: true,
  timeout: 1000,
  transports: ['websocket'],
});