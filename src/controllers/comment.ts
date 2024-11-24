import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { CommentQuery, NewComment } from "src/models/comment";
import { CommentService } from "src/services/comment";

@Controller("comment")
export class CommentController {
  constructor(private readonly service: CommentService) {}

  @Get()
  async get(@Query() query: CommentQuery) {
    return await this.service.get(query);
  }

  @Post()
  async add(@Body() body: NewComment) {
    return await this.service.add(body);
  }
}
