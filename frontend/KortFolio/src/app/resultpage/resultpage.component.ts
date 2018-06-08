import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../service/feedback.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultpage',
  templateUrl: './resultpage.component.html'
})
export class ResultpageComponent implements OnInit {

  constructor(private feedback : FeedbackService, private router : Router) { }

  ngOnInit() {
    this.feedback.getResult().subscribe(
      result => {
        if(result.result === '2'){
          alert(result.message);
          this.router.navigate(['/login']);
        }
        else{
          alert(result.message);
          this.router.navigate(['/feedback']);
        }

        
      }
    )
  }

}
