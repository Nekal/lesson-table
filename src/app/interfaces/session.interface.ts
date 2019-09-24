import {Lesson} from './lesson.interface';

export interface Session {
  name: string;
  lessons: Lesson[];
}
