import { Inject, Injectable } from "@nestjs/common";
import { CommentQuery, NewComment } from "src/models/comment";

@Injectable()
export class CommentService {
  constructor(
    @Inject("POSTGRES_POOL")
    private readonly sql
  ) {}

  async get(data: CommentQuery) {
    const { rollId } = data;
    const res = await this.sql(`
      SELECT *
      FROM comment
      WHERE rollId = ${rollId} 
      `);
    return res;
  }
  async add(data: NewComment) {
    const { rollId, content } = data;
    const res = await this.sql(`
    INSERT INTO
    comment(content, rollId )
    VALUES ('${content}', '${rollId}')
    RETURNING *
      `);
    return res;
  }
}
