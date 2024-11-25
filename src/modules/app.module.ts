import { Module } from "@nestjs/common";
import { DatabaseModule } from "./db";
import { TeacherController } from "src/controllers/teacher";
import { TeacherService } from "src/services/teacher";
import { CourseController } from "src/controllers/course";
import { CourseService } from "src/services/course";
import { SemesterController } from "src/controllers/semster";
import { SemsterService } from "src/services/Semster";
import { CommentController } from "src/controllers/comment";
import { CommentService } from "src/services/comment";
import { AccountController } from "src/controllers/account";
import { AccountService } from "src/services/account";

@Module({
  imports: [DatabaseModule],
  controllers: [
    TeacherController,
    CourseController,
    SemesterController,
    CommentController,
    AccountController,
  ],
  providers: [
    TeacherService,
    CourseService,
    SemsterService,
    CommentService,
    AccountService,
  ],
})
export class AppModule {}
