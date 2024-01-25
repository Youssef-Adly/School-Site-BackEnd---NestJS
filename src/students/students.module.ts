import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { CoursesController } from 'src/courses/courses.controller';
import { CoursesService } from 'src/courses/courses.service';

@Module({
  controllers: [StudentsController, CoursesController],
  providers: [StudentsService, CoursesService],
})
export class StudentsModule {}
