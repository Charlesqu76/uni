// course (
//     id SERIAL PRIMARY KEY,
//     code varchar(50) UNIQUE,
//     name varchar(255) NOT NULL
// );

import { IsString } from "class-validator";

export class NewCourse {
  @IsString()
  code: string;
  @IsString()
  name: string;
}

export class CourseQuery {
  @IsString()
  code: string;
}

export class RollQuery {
  @IsString()
  rollid: string;
}
