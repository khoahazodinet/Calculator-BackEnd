import {Injectable} from '@nestjs/common';
import {students} from "../db";
import {CreateStudentDto, FindStudentResponseDto, StudentResponseDto, UpdateStudentDto} from "./dto/student.dto";
import {v4 as uuid} from 'uuid';

@Injectable()
export class StudentService {
    private students = students;

    getStudents(): FindStudentResponseDto[] {
        return this.students;
    }

    getStudentById(studentId: string): FindStudentResponseDto{
        const index = this.students.findIndex((student)=>
            student.id===studentId);
        return this.students[index];
    }

    createStudent(payload: CreateStudentDto): StudentResponseDto{
        let newStudent = {
            id: uuid(),
            ...payload
        }
        this.students.push(newStudent);
        return newStudent;
    }

    updateStudent(payload: UpdateStudentDto, studentId: string) : StudentResponseDto{
        let updatedStudent: StudentResponseDto;

        this.students = this.students.map(student =>
            student.id === studentId ? updatedStudent = {
                id: studentId,
                ...student
            } : student
        );

        return updatedStudent;
    }
}

