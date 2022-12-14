import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ChannelSocketsGateway } from './channel/channel.gateway';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, UserModule],
  providers: [ChannelSocketsGateway],
})
export class AppModule {}
