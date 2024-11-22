import { Module } from "@nestjs/common";
import { DatabaseModule } from "./db";
import { TeacherController } from "src/controllers/teacher";
import { TeacherService } from "src/services/teacher";
import { CourseController } from "src/controllers/course";
import { CourseService } from "src/services/course";
import { SemesterController } from "src/controllers/semster";
import { SemsterService } from "src/services/Semster";

@Module({
  imports: [DatabaseModule],
  controllers: [TeacherController, CourseController, SemesterController],
  providers: [TeacherService, CourseService, SemsterService],
})
export class AppModule {}
