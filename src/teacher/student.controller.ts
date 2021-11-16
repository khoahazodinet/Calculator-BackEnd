import {Controller, Get, Param, Put} from '@nestjs/common';
import {FindStudentsByTeacherIdRequestDto} from "./dto/teacher.dto";
import {StudentResponseDto} from "../student/dto/student.dto";
import {StudentService} from "../student/student.service";

interface studentIdAndTeacherId {
    teacherId: string,
    studentId?: string
}

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
    constructor(private readonly studentService: StudentService) {}

    @Get()
    getStudentsByTeacherId(
        @Param() param: FindStudentsByTeacherIdRequestDto
    ) {
        const {teacherId} = param;
        return this.studentService.getStudentsByTeacherId(teacherId)
    }

    @Put('/:studentId')
    updateStudentTeacher(
        @Param() param: studentIdAndTeacherId
    ) {
        const {teacherId, studentId} = param;
        return 'Update student teacher ' + JSON.stringify(param);
    }
}
