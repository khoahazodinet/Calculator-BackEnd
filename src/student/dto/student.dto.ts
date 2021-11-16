// request

export interface CreateStudentRequestDto {
    name: string;
    teacherId: string;
}

export interface UpdateStudentResponseDto {
    studentId: string;
    name: string;
}

// response
export interface StudentResponseDto {
    id: string;
    name: string;
    teacherId: string;
}
