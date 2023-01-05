import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewsComponent } from './all-interviews/interviews.component';
import { ViewInterviewComponent } from './view-interview/view-interview.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Interviews'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'all-interviews'
      },
      {
        path: 'all-interviews',
        component: InterviewsComponent,
        data: {
          title: 'all-interviews'
        }
      },
      {
        path: 'view-interview',
        component: ViewInterviewComponent,
        data: {
          title: 'view-interview'
        }
      },


    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewsRoutingModule { }
