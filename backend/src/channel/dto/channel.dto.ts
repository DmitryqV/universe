import { Socket } from 'socket.io';

export class ChannelWebSocketDTO {
  socket?: Socket;
  message: string;
}
