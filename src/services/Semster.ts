import { Inject, Injectable } from "@nestjs/common";
import { NewSemster } from "src/models/semster";

@Injectable()
export class SemsterService {
  constructor(
    @Inject("POSTGRES_POOL")
    private readonly sql
  ) {}

  async getAll() {
    const res = await this.sql(`
      SELECT *
      FROM semester
      `);
    return res;
  }

  async add(data: NewSemster) {
    const { year, semester } = data;
    const res = await this.sql(`
    INSERT INTO
    semester(year, semester)
    VALUES ('${year}', '${semester}')
      `);
    return res;
  }
}
