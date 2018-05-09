import { Component, OnInit } from '@angular/core';
import { TitlebarComponent } from '../titlebar/titlebar.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['../app.component.css']
})
export class ContactComponent implements OnInit {
  name : string = "";
  constructor( private userinfo : TitlebarComponent) { }

  ngOnInit() {
  }

}
