import { Inject, Injectable } from "@nestjs/common";
import { AccountQuery, NewAccount } from "src/models/account";

@Injectable()
export class AccountService {
  constructor(
    @Inject("POSTGRES_POOL")
    private readonly sql
  ) {}

  async get(data: AccountQuery) {
    const { userId } = data;
    const res = await this.sql(
      `
      SELECT *
      FROM users
      WHERE user_id = ($1)
      LIMIT 1
      `,
      [userId]
    );
    return res;
  }
  async add(data: NewAccount) {
    const { email } = data;
    const res = await this.sql(
      `
    INSERT INTO
    users (email)
    VALUES ($1)
    RETURNING *
      `,
      [email]
    );
    return res;
  }
}
