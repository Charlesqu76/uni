// teacher (
//   id SERIAL PRIMARY KEY,
//   first_name varchar(50) NOT NULL,
//   last_name varchar(50) NOT NULL
// );

import { IsNumber, IsString } from "class-validator";

export class NewTeacher {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;
}

export class TeacherId {
  @IsString()
  teacherId: number;
}
