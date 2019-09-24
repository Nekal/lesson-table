import {Course} from './interfaces/course.interface';

export const courseList: Course[] = [
  {
    name: '1 курс',
    sessions: [
      {
        name: 'Зимняя',
        lessons: [
          {
            name: 'Математика',
            countHours: 12,
            hasExam: true,
            hasOffset: false,
            hasTest: true,
            data: new Date()
          }
        ]
      },
      {
        name: 'Летняя',
        lessons: [
          {
            name: 'Математика',
            countHours: 12,
            hasExam: true,
            hasOffset: false,
            hasTest: true,
            data: new Date()
          }
        ]
      }
    ]
  }
];
