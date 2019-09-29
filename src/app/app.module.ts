import {BrowserModule} from '@angular/platform-browser';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CourseService} from './services/course.service';
import {LessonsTableComponent} from './components/lessons-table/lessons-table.component';
import {CourseContainerComponent} from './components/course-container/course-container.component';
import {CourseItemComponent} from './components/course-item/course-item.component';
import {SessionItemComponent} from './components/session-item/session-item.component';
import {SessionContainerComponent} from './components/session-container/session-container.component';
import {CheckIconComponent} from './shared/check-icon/check-icon.component';
import {HttpClientModule} from '@angular/common/http';
import {CollapseService} from './services/collapse.service';

@NgModule({
  declarations: [
    AppComponent,
    LessonsTableComponent,
    CourseContainerComponent,
    CourseItemComponent,
    SessionItemComponent,
    SessionContainerComponent,
    CheckIconComponent,
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    HttpClientModule,

  ],
  providers: [
    CourseService,
    CollapseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
