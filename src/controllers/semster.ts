import { Body, Controller, Get, Post } from "@nestjs/common";
import { NewSemster } from "src/models/semster";
import { SemsterService } from "src/services/Semster";

@Controller("semester")
export class SemesterController {
  constructor(private readonly service: SemsterService) {}

  @Get()
  async getAll() {
    return await this.service.getAll();
  }

  @Post()
  async teacher(@Body() body: NewSemster) {
    return await this.service.add(body);
    return "";
  }
}
