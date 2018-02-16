import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['../app.component.css']
})

export class TitlebarComponent implements OnInit {

  menuStatus : boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  
  openMenu(){
    this.menuStatus = !this.menuStatus;

    var element = document.getElementById("menu");

    if(this.menuStatus)
      element.setAttribute("style","display:block;");
    else
      element.setAttribute("style","display:none;");
  }
/*
  Modal

  @ViewChild('autoShownModal') autoShownModal: ModalDirective;
  isModalShown: boolean = false;
 
  showModal(): void {
    this.isModalShown = true;
  }
 
  hideModal(): void {
    this.autoShownModal.hide();
  }
 
  onHidden(): void {
    this.isModalShown = false;
  }*/
}
