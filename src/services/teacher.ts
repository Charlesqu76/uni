import { Inject, Injectable } from "@nestjs/common";
import { NewTeacher, TeacherId } from "src/models/teacher";

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
    teacher(first_name, last_name)
    VALUES ('${firstName}', '${lastName}')
      `);
    return res;
  }

  async relatedCourse(data: TeacherId) {
    const { teacherId } = data;
    return await this.sql(`
       SELECT *
      FROM course_teacher AS ct
        JOIN course as c ON (c.id = course_id)
        JOIN semester as s ON (s.id = ct.semester)
        JOIN teacher as t ON (t.id = teacher_id)
      WHERE t.id = '${teacherId}'
      `);
  }
}
