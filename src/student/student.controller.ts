import {Controller, Get, Post, Put, Param, Body} from '@nestjs/common';
import {CreateStudentDto, FindStudentResponseDto, StudentResponseDto, UpdateStudentDto} from "./dto/student.dto";
import {StudentService} from "./student.service";

@Controller('students')
export class StudentController {
    constructor(private readonly studentService: StudentService) {
    }

    @Get()
    getStudents(): FindStudentResponseDto[] {
        return this.studentService.getStudents();
    }

    @Get('/:studentId')
    getStudentById(
        @Param() params: { studentId: string }
    ): StudentResponseDto {
        const {studentId} = params;
        return this.studentService.getStudentById(studentId);
    }

    @Post()
    createStudent(
        @Body() body: CreateStudentDto
    ): FindStudentResponseDto {
        return this.studentService.createStudent(body);
    }

    @Put('/:studentId')
    updateStudentById(
        @Param() param: { studentId: string },
        @Body() body: UpdateStudentDto
    ): StudentResponseDto {
        return this.studentService.updateStudent(body, param.studentId);
    }
}
