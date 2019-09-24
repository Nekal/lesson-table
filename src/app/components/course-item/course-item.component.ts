import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Course} from '../../interfaces/course.interface';

@Component({
  selector: 'app-course-item',
  templateUrl: 'course-item.component.html',
  styleUrls: ['course-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent {
  @Input() course: Course;

  public isShowContent: boolean = true;

  public onToggle(): void {
    this.isShowContent = !this.isShowContent;
  }
}
