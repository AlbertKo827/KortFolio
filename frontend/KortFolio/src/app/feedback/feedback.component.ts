import { Component, OnInit, ViewChild, ElementRef, HostListener, Testability } from '@angular/core';
import { FeedbackService } from '../service/feedback.service'

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['../app.component.css']
})
export class FeedbackComponent implements OnInit {

  offsetBot;
test :UIEvent;

comments;
tests = ["", "", ""]

@HostListener('scroll') scroll(){
  console.log('sfsef')
}

  constructor(private Feedback : FeedbackService) { }

  ngOnInit() {
    this.Feedback.getComments().subscribe(
      comment => {
        this.comments = comment;

        console.log(this.comments);
      },
      err => console.log(err),
      () => console.log('success')
    )
  }
}
