export interface FindStudentResponseDto {
    id: string;
    name: string;
    teacherId: string;
}

export interface StudentResponseDto {
    id: string;
    name: string;
    teacherId: string;
}

export class CreateStudentDto {
    name: string;
    teacherId: string;
}

export class UpdateStudentDto {
    studentId: string;
    name: string;
}