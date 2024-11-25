import { Inject, Injectable } from "@nestjs/common";
import { CourseQuery, NewCourse, RollQuery } from "src/models/course";
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
    RETURNING *
      `);
    return res;
  }
  async getDetail(data: CourseQuery) {
    const { code } = data;
    const query = `
    SELECT *
    FROM course AS c 
    WHERE c.code = $1
  `;
    const res = await this.sql(query, [code]);
    return res[0];
  }

  async getSubCourses(data: CourseQuery) {
    const { code } = data;
    const query = `
    SELECT ct.*, s.*, t.*
    FROM course AS c 
      NATURAL JOIN roll AS ct 
      NATURAL JOIN semester AS s
      NATURAL JOIN teacher AS t
    WHERE c.code = $1
  `;
    const res = await this.sql(query, [code]);
    return res;
  }

  async getRoll(data: RollQuery) {
    const { rollid } = data;
    const res = await this.sql(`
      SELECT *
        FROM roll AS ct
        NATURAL JOIN course AS c 
        NATURAL JOIN semester AS s 
        NATURAL JOIN teacher AS t
      WHERE rollid = '${rollid}'
      `);
    return res[0];
  }

  async addTeacher(data: CourseTeacher) {
    const { courseId, teacherId, semesterId } = data;
    await this.sql(`
      INSERT INTO
      roll (courseId, teacherId, semesterId)
      VALUES ('${courseId}', '${teacherId}', '${semesterId}')
      `);
  }
}
