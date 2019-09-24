import {Session} from './session.interface';

export interface Course {
  name: string;
  sessions: Session[];
}
