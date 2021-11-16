import {HttpException, Injectable, NestMiddleware} from '@nestjs/common'
import {NextFunction, Request, Response} from "express";

@Injectable()
export class ValidCalculatorMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const {bill, people, tipPercent} = req.params;
        const checkIsValid = (data) => {
            const floatData = Number(data);
            return !(floatData < 0 || floatData === 0 || floatData >= 999999999 || isNaN(data));
        }
        if(!checkIsValid(bill)) {
            throw new HttpException('Bill value is invalid ' + bill, 400);
        }
        if(!checkIsValid(tipPercent)) {
            throw new HttpException('Tip percent value is invalid', 400);
        }
        if(!checkIsValid(people)) {
            throw new HttpException('Number of people is invalid', 400);
        }
        next();
    }
}