import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {courseList} from '../config';
import {Course} from '../interfaces/course.interface';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CourseService {
  constructor(private http: HttpClient) {

  }

  public getCourseList(): Observable<Course[]> {
    return of(courseList);
    // return this.http.get<Course[]>('some server url');
  }
}
