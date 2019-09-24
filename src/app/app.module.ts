import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CourseService} from './services/course.service';
import {LessonsTableComponent} from './components/lessons-table/lessons-table.component';
import {CourseContainerComponent} from './components/course-container/course-container.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonsTableComponent,
    CourseContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
