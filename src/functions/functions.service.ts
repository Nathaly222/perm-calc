import { Injectable } from '@nestjs/common';
import { factorial } from 'mathjs';

@Injectable()
export class FunctionService {
  calculateFactorial(num: number): number {
    return factorial(num - 1 );
  }
}



