import { Param, Query, Get, Controller } from '@nestjs/common';
import { FunctionService } from './functions.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('math')
@Controller('math')
export class FunctionController {
  constructor(private functionService: FunctionService) {}

  // Ruta para calcular el factorial
  @ApiOperation({ summary: 'Calculate factorial' })
  @ApiResponse({ status: 200, description: 'The factorial has been successfully calculated.' })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  @Get('factorial/:number')
  getFactorial(@Param('number') number: string) {
    const factor = parseInt(number, 10);
    const result = this.functionService.calculateFactorial(factor);
    return { result };
  }

  // Ruta para calcular la permutación lineal P(n, r)
  @ApiOperation({ summary: 'Calculate linear permutation P(n, r)' })
  @ApiResponse({ status: 200, description: 'The linear permutation has been successfully calculated.' })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  @Get('linear-permutation')
  getLinearPermutation(@Query('n') n: string, @Query('r') r: string) {
    const nNum = parseInt(n, 10);
    const rNum = parseInt(r, 10);
    const result = this.functionService.calculateLinearPermutation(nNum, rNum);
    return { result };
  }

  // Ruta para calcular la permutación circular P(n)
  @ApiOperation({ summary: 'Calculate circular permutation P(n)' })
  @ApiResponse({ status: 200, description: 'The circular permutation has been successfully calculated.' })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  @Get('circular-permutation/:number')
  getCircularPermutation(@Param('number') number: string) {
    const nNum = parseInt(number, 10);
    const result = this.functionService.calculateCircularPermutation(nNum);
    return { result };
  }

  // Ruta para calcular la permutación de repetición P(n, r1, r2, ..., rn)
  @ApiOperation({ summary: 'Calculate repetition permutation P(n, r1, r2, ..., rn)' })
  @ApiResponse({ status: 200, description: 'The repetition permutation has been successfully calculated.' })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  @Get('repetition-permutation')
  getRepetitionPermutation(@Query('n') n: string, @Query('repetitions') repetitions: string) {
    const nNum = parseInt(n, 10);
    const repetitionCounts = repetitions.split(',').map(num => parseInt(num, 10));
    const result = this.functionService.calculateRepetitionPermutation(nNum, repetitionCounts);
    return { result };
  }
}