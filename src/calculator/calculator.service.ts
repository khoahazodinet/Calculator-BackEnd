import {HttpException, Injectable} from '@nestjs/common';
import {ICalculatorRequestDto, ICalculatorResponseDto} from "./dto/calculator.dto";

@Injectable()
export class CalculatorService {

    getCalculatedData(req : ICalculatorRequestDto): ICalculatorResponseDto{
        const {bill, people, tipPercent} = req;

        const floatBill = Number(bill);
        const floatTip = Number(tipPercent);
        const intPeople = Number(people);

        return{
            result: true,
            amount: ((floatBill*floatTip/100)/intPeople).toString(),
            total: ((floatBill*(floatTip+100)/100)/intPeople).toString()
        }}
}
