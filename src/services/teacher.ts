import { Inject, Injectable } from "@nestjs/common";
import { NewTeacher, TeacherId } from "src/models/teacher";
import { allTeachers, insertTeacher, relatedCourse } from "src/sqls/teacher";
import { transformData } from "src/util/teacher";

@Injectable()
export class TeacherService {
  constructor(
    @Inject("POSTGRES_POOL")
    private readonly sql
  ) {}

  async getAll() {
    const res = await this.sql(allTeachers);
    return res;
  }

  async add(data: NewTeacher) {
    const { firstName, lastName } = data;
    const res = await this.sql(insertTeacher, [firstName, lastName]);
    return res;
  }

  async relatedCourse(payload: TeacherId) {
    const { teacherId } = payload;
    const data = await this.sql(relatedCourse, [teacherId]);
    const res = transformData(data);
    return res;
  }
}
