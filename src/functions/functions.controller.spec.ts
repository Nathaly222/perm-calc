import { Test, TestingModule } from '@nestjs/testing';
import { FunctionController } from './functions.controller';
import { FunctionService } from './functions.service';

describe('FunctionsController', () => {
  let controller: FunctionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FunctionController],
      providers: [FunctionService],
    }).compile();

    controller = module.get<FunctionController>(FunctionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
