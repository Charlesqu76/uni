// CREATE TABLE
//     comment_to_course (
//         id SERIAL PRIMARY KEY,
//         create_time timestamp default NOW (),
//         content text NOT NULL,
//         course_id int,
//         teacher_id int,
//         semester_id int,
//         FOREIGN KEY (course_id, teacher_id, semester_id) REFERENCES course_teacher
//     );

import { IsNumber, IsNumberString, IsString } from "class-validator";

export class CommentQuery {
  @IsNumberString()
  rollId: number;
}

export class NewComment extends CommentQuery {
  @IsString()
  content: string;
  @IsNumber()
  rollId: number;
}
