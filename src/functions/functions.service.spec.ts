import { Test, TestingModule } from '@nestjs/testing';
import { FunctionService } from './functions.service';

describe('FunctionsService', () => {
  let service: FunctionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FunctionService],
    }).compile();

    service = module.get<FunctionService>(FunctionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
