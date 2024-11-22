// CREATE TABLE
//     course_teacher (
//         course_id int REFERENCES course,
//         teacher_id int REFERENCES teacher,
//         semester int REFERENCES semester,
//         PRIMARY KEY (course_id, teacher_id, semester)
//     );

import { IsNumber } from "class-validator";

export class CourseTeacher {
  @IsNumber()
  courseId: Number;
  @IsNumber()
  teacherId: Number;
  @IsNumber()
  semesterId: Number;
}
