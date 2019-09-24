import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { courseList } from '../config';
import {Course} from '../interfaces/course.interface';

@Injectable()
export class CourseService {
  public getCourseList(): Observable<Course[]> {
    return of(courseList);
  }
}
