import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { AccountQuery, NewAccount } from "src/models/account";
import { AccountService } from "src/services/account";

@Controller("account")
export class AccountController {
  constructor(private readonly service: AccountService) {}

  @Get()
  async get(@Query() query: AccountQuery) {
    return await this.service.get(query);
  }

  @Post()
  async add(@Body() body: NewAccount) {
    return await this.service.add(body);
  }
}
