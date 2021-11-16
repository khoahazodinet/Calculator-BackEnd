import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {CalculatorService} from './calculator.service';
import {CalculatorController} from "./calculator.controller";
import {ValidCalculatorMiddleware} from "../common/middlewares/validCalculator.middleware";

@Module({
    controllers: [CalculatorController],
    providers: [CalculatorService]
})

export class CalculatorModule implements NestModule {
    configure(consumer: MiddlewareConsumer): any {
        consumer.apply(ValidCalculatorMiddleware).forRoutes({
            path: 'api/calculator',
            method: RequestMethod.GET
        });
    }
}
