import {HttpException, Injectable, NestMiddleware} from '@nestjs/common'
import {NextFunction, Request, Response} from "express";
import {students} from "../../db";

@Injectable()
export class ValidStudentMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const studentId = req.params.studentId;
        const isStudentExits = students.some((student) => student.id === studentId);
        if (!isStudentExits) {
            throw new HttpException('Student Not Found', 400);
        }
        next();
    }
}
