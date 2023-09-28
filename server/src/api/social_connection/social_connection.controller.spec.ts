import { Test, TestingModule } from '@nestjs/testing';
import { SocialConnectionController } from './social_connection.controller';

describe('SocialConnectionController', () => {
  let controller: SocialConnectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SocialConnectionController],
    }).compile();

    controller = module.get<SocialConnectionController>(SocialConnectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
