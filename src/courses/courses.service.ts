import { Injectable } from '@nestjs/common';

@Injectable()
export class CoursesService {
  courses = [
    { id: 1, name: 'js', description: 'lorem epsem', duration: '2 Weeks' },
    { id: 2, name: 'NodeJS', description: 'lorem epsem', duration: '1 Weeks' },
    { id: 3, name: 'Angular', description: 'lorem epsem', duration: '5 Days' },
    { id: 4, name: 'NestJS', description: 'lorem epsem', duration: '3 Days' },
  ];
  id = this.courses.length;
  create(createCourseDto: any) {
    createCourseDto.id = ++this.id;
    this.courses.push(createCourseDto);
    return this.courses;
  }

  findAll() {
    return this.courses;
  }

  findOne(id: number) {
    return this.courses.find((crs) => (crs.id == id));
  }

  update(id: number, updateCourseDto: any) {
    let crs = this.courses.find((crs) => (crs.id == id));
    crs = { ...crs, ...updateCourseDto };
    console.log('crs: ', crs);
    this.courses = this.courses.filter((crs) => crs.id != id);
    this.courses.push(crs);
    console.log('this.courses: ', this.courses);
    return this.courses;
  }

  remove(id: number) {
    this.courses = this.courses.filter((crs) => {
      crs.id != id;
    });
    return this.courses;
  }
}
