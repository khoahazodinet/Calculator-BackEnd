import {Controller, Get, Param, Put} from '@nestjs/common';

interface studentIdAndTeacherId {
    teacherId: string, studentId?: string
}

@Controller('teacher/:teacherId/students')
export class StudentTeacherController {
    @Get()
    getStudents(
        @Param() param: studentIdAndTeacherId
    ){
        const {teacherId} = param;
        return 'Get all students with teacher Id ' + teacherId;
    }

    @Put('/:studentId')
    updateStudentTeacher(
        @Param() param: studentIdAndTeacherId
    ){
        const {teacherId, studentId} = param;
        return 'Update student teacher ' + JSON.stringify(param);
    }
}
