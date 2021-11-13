import {Controller, Get, Param} from '@nestjs/common';

@Controller('teacher')
export class TeacherController {
    @Get()
    getAllTeacher(){
        return 'All teacher';
    }

    @Get('/:teacherId')
    getTeacherBy(
        @Param() param: {teacherId: string}
    ){
        return 'Get teacher by id';
    }
}
