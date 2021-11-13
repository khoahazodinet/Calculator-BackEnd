import {Module} from '@nestjs/common';

// student
import {StudentController} from "../student/student.controller";
import {StudentService} from "../student/student.service";

//teacher
import {TeacherController} from "../teacher/teacher.controller";
import {StudentTeacherController} from "../teacher/student.controller";

@Module({
    imports: [],
    controllers: [
        StudentController,
        TeacherController,
        StudentTeacherController
    ],
    providers: [
        StudentService
    ]
})
export class AppModule {
}
