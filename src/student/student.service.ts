import {Injectable} from '@nestjs/common';
import {students} from "../db";
import {
    CreateStudentRequestDto,
    StudentResponseDto,
    UpdateStudentResponseDto
} from "./dto/student.dto";
import {v4 as uuid} from 'uuid';

@Injectable()
export class StudentService {
    private students: StudentResponseDto[] = students;

    getStudents(): StudentResponseDto[] {
        return this.students;
    }

    getStudentById(studentId: string): StudentResponseDto {
        const index = this.students.findIndex((student) =>
            student.id === studentId);
        return this.students[index];
    }

    createStudent(payload: CreateStudentRequestDto): StudentResponseDto {
        let newStudent = {
            id: uuid(),
            ...payload
        }
        this.students.push(newStudent);
        return newStudent;
    }

    updateStudent(payload: UpdateStudentResponseDto): StudentResponseDto {
        let updatedStudent: StudentResponseDto;

        this.students = this.students.map((student) => {
            if (student.id === payload.studentId) {
                updatedStudent = {
                    ...student,
                    name: payload.name
                }
                return updatedStudent;
            } else return student;
        });

        return updatedStudent;
    }

    getStudentsByTeacherId(teacherId: string): StudentResponseDto[]{
        return this.students.filter((student)=>{
            return student.teacherId===teacherId;
        })
    }
}

