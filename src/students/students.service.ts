import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentsService {
  students = [
    { id: 1, name: 'youssef', age: 27, courses: [1], grade: 100 },
    { id: 2, name: 'ahmed', age: 25, courses: [1, 2], grade: 150 },
    { id: 3, name: 'ali', age: 30, courses: [2, 3], grade: 90 },
    { id: 4, name: 'menna', age: 15, courses: [1, 3], grade: 110 },
    { id: 5, name: 'menna', age: 15, courses: [4, 3], grade: 110 },
  ];
  id: number = this.students.length;
  create(createStudentDto: any) {
    createStudentDto.id = ++this.id;
    this.students.push(createStudentDto);
    console.log(this.students);
    return this.students;
  }

  findAll() {
    return this.students;
  }

  findOne(id: number) {
    return this.students.find((std) => std.id == id);
  }

  update(id: number, updateStudentDto: any) {
    let std = this.students.find((std) => std.id == id);
    std = { ...std, ...updateStudentDto };
    console.log('std: ', std);
    this.students = this.students.filter((std) => std.id != id);
    this.students.push(std);
    console.log('this.students: ', this.students);
    return this.students;
  }

  remove(id: number) {
    this.students = this.students.filter((std) => std.id != id);
    console.log('students: ', this.students);
    return this.students;
  }
}
