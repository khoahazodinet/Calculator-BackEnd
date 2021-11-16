import {Injectable} from '@nestjs/common';
import {teachers} from "../db";
import {TeacherResponseDto} from "./dto/teacher.dto";

@Injectable()
export class TeacherService {
    private teachers: TeacherResponseDto[] = teachers;

    getTeachers(): TeacherResponseDto[] {
        return this.teachers;
    }

    getTeacherById(teacherId: string): TeacherResponseDto {
        return this.teachers.find((student) => student.id === teacherId);
    }
}
