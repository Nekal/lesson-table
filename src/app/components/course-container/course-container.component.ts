import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CourseService} from '../../services/course.service';
import {Course} from '../../interfaces/course.interface';

@Component({
  selector: 'app-course-container',
  templateUrl: 'course-container.component.html',
  styleUrls: ['course-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseContainerComponent implements OnInit  {
  public courseList: Course[];

  constructor(private courseService: CourseService) {

  }

  private set courseListData(courseList: any) {
    this.courseList = courseList;
  }

  public ngOnInit(): void {
    this.loadCourseList();
  }

  private loadCourseList(): void {
    this.courseService.getCourseList().subscribe((response: Course[]) => {
      this.courseListData = response;
    });
  }
}
