import { Test, TestingModule } from '@nestjs/testing';
import { AuthExtendedService } from './auth_extended.service';

describe('AuthExtendedService', () => {
  let service: AuthExtendedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthExtendedService],
    }).compile();

    service = module.get<AuthExtendedService>(AuthExtendedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
