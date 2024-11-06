import { Param, Query, Get, Controller } from '@nestjs/common';
import { FunctionService } from './functions.service';

@Controller('math')
export class FunctionController {
  constructor(private functionService: FunctionService) {}

  // Ruta para calcular el factorial
  @Get('factorial/:number')
  getFactorial(@Param('number') number: string) {
    const factor = parseInt(number, 10);
    return this.functionService.calculateFactorial(factor);
  }

  // Ruta para calcular la permutación lineal P(n, r)
  @Get('linear-permutation')
  getLinearPermutation(@Query('n') n: string, @Query('r') r: string) {
    const nNum = parseInt(n, 10);
    const rNum = parseInt(r, 10);
    return this.functionService.calculateLinearPermutation(nNum, rNum);
  }

  // Ruta para calcular la permutación circular P(n)
  @Get('circular-permutation/:number')
  getCircularPermutation(@Param('number') number: string) {
    const nNum = parseInt(number, 10);
    return this.functionService.calculateCircularPermutation(nNum);
  }

  // Ruta para calcular la permutación de repetición P(n, r1, r2, ..., rn)
  @Get('repetition-permutation')
  getRepetitionPermutation(
    @Query('n') n: string,
    @Query('counts') counts: string,
  ) {
    const nNum = parseInt(n, 10);
    const repetitionCounts = counts.split(',').map(count => parseInt(count, 10));
    return this.functionService.calculateRepetitionPermutation(nNum, repetitionCounts);
  }
}
