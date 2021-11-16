import {Controller, Get, Param} from '@nestjs/common';
import {TeacherResponseDto} from "./dto/teacher.dto";
import {TeacherService} from "./teacher.service";

@Controller('teachers')
export class TeacherController {
    constructor(private readonly teacherService: TeacherService) {
    }

    @Get()
    getAllTeacher(): TeacherResponseDto[] {
        return this.teacherService.getTeachers();
    }

    @Get('/:teacherId')
    getTeacherById(
        @Param() param: { teacherId: string }
    ): TeacherResponseDto {
        const {teacherId} = param;
        return this.teacherService.getTeacherById(teacherId);
    }
}
