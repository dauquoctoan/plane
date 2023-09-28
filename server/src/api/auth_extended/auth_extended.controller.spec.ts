import { Test, TestingModule } from '@nestjs/testing';
import { AuthExtendedController } from './auth_extended.controller';

describe('AuthExtendedController', () => {
  let controller: AuthExtendedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthExtendedController],
    }).compile();

    controller = module.get<AuthExtendedController>(AuthExtendedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
