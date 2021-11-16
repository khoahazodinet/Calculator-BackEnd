import {Controller, Get, Post, Put, Param, Body} from '@nestjs/common';
import {
    CreateStudentRequestDto,
    StudentResponseDto,
    UpdateStudentResponseDto
} from "./dto/student.dto";
import {StudentService} from "./student.service";
import {students} from "../db";

@Controller('students')
export class StudentController {

    constructor(private readonly studentService: StudentService) {
    }

    @Get()
    getStudents(): StudentResponseDto[] {
        return this.studentService.getStudents();
    }

    @Get('/:studentId')
    getStudentById(
        @Param() param: {studentId: string}
    ): StudentResponseDto {
        return this.studentService.getStudentById(param.studentId);
    }

    @Post()
    createStudent(
        @Body() body: CreateStudentRequestDto
    ): StudentResponseDto {
        return this.studentService.createStudent(body);
    }

    @Put()
    updateStudentById(
        @Body() body: UpdateStudentResponseDto
    ): StudentResponseDto {
        return this.studentService.updateStudent(body);
    }
}
