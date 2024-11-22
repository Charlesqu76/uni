// CREATE TABLE
//     semester (
//         id SERIAL PRIMARY KEY,
//         year int,
//         semester int,
//         UNIQUE (year, semester)
//     );

import { IsNumber } from "class-validator";

export class NewSemster {
  @IsNumber()
  year: number;
  @IsNumber()
  semester: number;
}
