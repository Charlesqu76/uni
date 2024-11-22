import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { TeacherService } from "../services/teacher";
import { NewTeacher, TeacherId } from "src/models/teacher";

@Controller("teacher")
export class TeacherController {
  constructor(private readonly service: TeacherService) {}

  @Get()
  async getAll() {
    return await this.service.getAll();
  }

  @Get(":teacherId")
  async course(@Param() query: TeacherId) {
    return this.service.relatedCourse(query);
  }

  @Post()
  async teacher(@Body() body: NewTeacher) {
    console.log(body);
    return await this.service.add(body);
  }
}
