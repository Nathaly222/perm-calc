import { Param, Get, Controller } from "@nestjs/common";
import { FunctionService } from "./functions.service";

@Controller('math')
export class FunctionController {
  constructor(private functionService: FunctionService) {}

  @Get('factorial/:number')
  getFactorial(@Param('number') number: string){
    const factor = parseInt(number, 10);
    return this.functionService.calculateFactorial(factor);
  }
}