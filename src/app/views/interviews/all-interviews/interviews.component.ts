import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.scss']
})
export class InterviewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  deleteInterview()
  {
    Swal.fire({
      title: 'Delete!',
      text: 'Do you want to continue',
      icon: 'question',
      confirmButtonText: 'Delete'
    });
  }
}
