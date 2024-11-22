import { Inject, Injectable } from "@nestjs/common";
import { CourseQuery, NewCourse } from "src/models/course";
import { CourseTeacher } from "src/models/courseTeacher";

@Injectable()
export class CourseService {
  constructor(
    @Inject("POSTGRES_POOL")
    private readonly sql
  ) {}

  async getAll() {
    const res = await this.sql(`
      SELECT *
      FROM course
      `);
    return res;
  }

  async add(data: NewCourse) {
    const { code, name } = data;
    const res = await this.sql(`
    INSERT INTO
    course(code, name)
    VALUES ('${code}', '${name}')
      `);
    return res;
  }

  async getTeacher(data: CourseQuery) {
    const { code } = data;
    const res = await this.sql(`
      SELECT *
      FROM course_teacher AS ct
        JOIN course as c ON (c.id = course_id)
        JOIN semester as s ON (s.id = ct.semester)
        JOIN teacher as t ON (t.id = teacher_id)
      WHERE c.code = '${code}'
      `);

    return res;
  }

  async addTeacher(data: CourseTeacher) {
    const { courseId, teacherId, semesterId } = data;
    await this.sql(`
      INSERT INTO
      course_teacher (course_id, teacher_id, semester)
      VALUES ('${courseId}', '${teacherId}', '${semesterId}')
      `);
  }
}
