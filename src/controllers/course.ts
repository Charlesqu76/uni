import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CourseQuery, NewCourse } from "src/models/course";
import { CourseTeacher } from "src/models/courseTeacher";
import { CourseService } from "src/services/course";

@Controller("course")
export class CourseController {
  constructor(private readonly service: CourseService) {}

  @Get()
  async getAll() {
    return await this.service.getAll();
  }

  @Get(":code")
  async getTeacher(@Param() query: CourseQuery) {
    return await this.service.getTeacher(query);
  }

  @Post()
  async add(@Body() body: NewCourse) {
    return await this.service.add(body);
  }

  @Post("teacher")
  async addTeacher(@Body() body: CourseTeacher) {
    return await this.service.addTeacher(body);
  }
}
