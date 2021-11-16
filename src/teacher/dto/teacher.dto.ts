// request
export interface FindStudentsByTeacherIdRequestDto {
    teacherId: string,
    studentId?: string
}

// response
export interface TeacherResponseDto {
    id: string;
    name: string;
}
