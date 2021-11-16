import {Controller, Get, Param, Body} from '@nestjs/common';
import {CalculatorService} from "./calculator.service";
import {ICalculatorRequestDto, ICalculatorResponseDto} from "./dto/calculator.dto";

@Controller('calculator')
export class CalculatorController {
    constructor(private readonly calculatorService: CalculatorService) {
    }

    @Get()
    getCalculateData(
        @Param() param: ICalculatorRequestDto
    ): ICalculatorResponseDto {
        return this.calculatorService.getCalculatedData(param);
    }
}
