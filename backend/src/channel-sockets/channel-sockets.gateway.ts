import {
  SubscribeMessage,
  WebSocketGateway,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

import { ChannelWebSocketDTO } from './dto/channel-sockets.dto';

@WebSocketGateway(81, { transports: ['websocket'] })
export class ChannelSocketsGateway {
  @SubscribeMessage('channel')
  handleMessage(
    @MessageBody() payload: ChannelWebSocketDTO,
    @ConnectedSocket() client: Socket,
  ) {
    console.log(`Socket: ${client.id} \n send message: ${JSON.stringify(payload)}`);
    client.emit('channel', { ...payload, socket: client.id });
    client.broadcast.emit('channel', { ...payload, socket: client.id });
  }

  handleDisconnect(client: Socket) {
    console.log(`Socket disconnected: ${client.id}`);
  }

  handleConnection(client: Socket) {
    console.log(`Socket connected: ${client.id}`);
  }
}
