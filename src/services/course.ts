import { Inject, Injectable } from "@nestjs/common";
import { CourseQuery, NewCourse, RollQuery } from "src/models/course";
import { CourseTeacher } from "src/models/courseTeacher";
import { transformData } from "src/util/course";

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

    const res = await this.sql(`
      SELECT *
        FROM roll AS ct
        NATURAL JOIN course AS c 
        NATURAL JOIN semester AS s 
        NATURAL JOIN teacher AS t
      WHERE c.code = '${code}'
      `);
    const formatData = transformData(res);

    return formatData;
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
