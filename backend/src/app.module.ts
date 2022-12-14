import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ChannelSocketsGateway } from './channel-sockets/channel-sockets.gateway';

@Module({
  imports: [AuthModule],
  providers: [ChannelSocketsGateway],
})
export class AppModule {}
