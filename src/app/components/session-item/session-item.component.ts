import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Session} from '../../interfaces/session.interface';

@Component({
  selector: 'app-session-item',
  templateUrl: 'session-item.component.html',
  styleUrls: ['session-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionItemComponent {
  @Input() public session: Session;
}
