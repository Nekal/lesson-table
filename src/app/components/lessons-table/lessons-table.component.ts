import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-lessons-table',
  templateUrl: 'lessons-table.component.html',
  styleUrls: ['lessons-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LessonsTableComponent {
  @Input() lessonList: any[];

  public getDataFormat(date: Date): string {
    return date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
  }
}
