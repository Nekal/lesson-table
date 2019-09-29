import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';
import {Course} from '../../interfaces/course.interface';
import {CollapseService} from '../../services/collapse.service';

@Component({
  selector: 'app-course-item',
  templateUrl: 'course-item.component.html',
  styleUrls: ['course-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent {
  @Input() public course: Course;

  public isPinked: boolean = false;
  public isShowContent: boolean = false;

  constructor(private collapseService: CollapseService,
              private changeDetectorRef: ChangeDetectorRef
  ) {
    this.onToggleSubscribe();
  }

  public onToggle(): void {
    this.collapseService.onToggle(this.course.id);
  }

  public onPick(): void {
    this.isPinked = !this.isPinked;
  }

  private onToggleSubscribe(): void {
    this.collapseService.toggle.subscribe((id: number) => {
      if (this.course.id !== id && !this.isPinked) {
        this.isShowContent = false;
      }

      if (this.course.id === id) {
        this.isShowContent = !this.isShowContent;
      }

      this.changeDetectorRef.detectChanges();
    });
  }
}
