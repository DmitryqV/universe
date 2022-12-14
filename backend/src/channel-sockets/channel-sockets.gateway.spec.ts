import { Test, TestingModule } from '@nestjs/testing';
import { ChannelSocketsGateway } from './channel-sockets.gateway';

describe('ChannelSocketsGateway', () => {
  let gateway: ChannelSocketsGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChannelSocketsGateway],
    }).compile();

    gateway = module.get<ChannelSocketsGateway>(ChannelSocketsGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
