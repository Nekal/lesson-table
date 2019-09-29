import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Session} from '../../interfaces/session.interface';

@Component({
  selector: 'app-session-container',
  templateUrl: 'session-container.component.html',
  styleUrls: ['session-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionContainerComponent {
  @Input() public sessions: Session[];
}
