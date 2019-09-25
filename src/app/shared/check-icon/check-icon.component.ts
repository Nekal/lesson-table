import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Session} from '../../interfaces/session.interface';

@Component({
  selector: 'app-check-icon',
  templateUrl: 'check-icon.component.html',
  styleUrls: ['check-icon.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckIconComponent {
  @Input() public isActive: boolean = true;
}
