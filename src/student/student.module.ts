import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {StudentService} from "./student.service";
import {StudentController} from "./student.controller";
import {ValidStudentMiddleware} from "../common/middlewares/validStudent.middleware";

@Module({
    controllers: [StudentController],
    providers: [StudentService],
    exports: [StudentService]
})
export class StudentModule implements NestModule{
    configure(consumer: MiddlewareConsumer): any {
        consumer.apply(ValidStudentMiddleware).forRoutes({
            path: 'student/:studentId',
            method: RequestMethod.GET
        });
        consumer.apply(ValidStudentMiddleware).forRoutes({
            path: 'student/:studentId',
            method: RequestMethod.PUT
        });
    }
}
