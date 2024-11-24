import { Inject, Injectable } from "@nestjs/common";
import { NewTeacher, TeacherId } from "src/models/teacher";
import { transformData } from "src/util/teacher";

@Injectable()
export class TeacherService {
  constructor(
    @Inject("POSTGRES_POOL")
    private readonly sql
  ) {}

  async getAll() {
    const res = await this.sql(`
      SELECT *
      FROM teacher
      `);
    return res;
  }

  async add(data: NewTeacher) {
    const { firstName, lastName } = data;
    const res = await this.sql(`
    INSERT INTO
    teacher(firstName, lastName)
    VALUES ('${firstName}', '${lastName}')
      `);
    return res;
  }

  async relatedCourse(payload: TeacherId) {
    const { teacherId } = payload;
    const data = await this.sql(`
      SELECT *
     FROM roll 
       NATURAL JOIN course 
       NATURAL JOIN semester 
       NATURAL JOIN teacher
     WHERE teacherId = '${teacherId}'
     `);
    const res = transformData(data);
    return res;
  }
}
