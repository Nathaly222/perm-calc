import { Module } from '@nestjs/common';
import { FunctionService } from './functions.service';
import { FunctionController } from './functions.controller';

@Module({
  controllers: [FunctionController],
  providers: [FunctionService],
})
export class FunctionsModule {}
