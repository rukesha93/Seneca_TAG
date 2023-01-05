import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewsRoutingModule } from './interviews-routing.module';
import { InterviewsComponent } from './all-interviews/interviews.component';
import { CardModule, GridModule, UtilitiesModule, NavModule, TabsModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ThemeRoutingModule } from '../theme/theme-routing.module';
import { ViewInterviewComponent } from './view-interview/view-interview.component';


@NgModule({
  declarations: [
    InterviewsComponent,
    ViewInterviewComponent
  ],
  imports: [
    CommonModule,
    InterviewsRoutingModule,
    CommonModule,
    ThemeRoutingModule,
    CardModule,
    GridModule,
    UtilitiesModule,
    IconModule,
    NavModule,
    TabsModule
  ]
})
export class InterviewsModule { }
