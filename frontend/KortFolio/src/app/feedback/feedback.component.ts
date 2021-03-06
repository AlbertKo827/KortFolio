import { Component, OnInit, ViewChild, ElementRef, HostListener, Testability } from '@angular/core';
import { FeedbackService } from '../service/feedback.service'
import { UserinfoService, UserModel } from '../service/userinfo.service'
import { BoundTextAst } from '@angular/compiler';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['../app.component.css']
})
export class FeedbackComponent implements OnInit {

comments;
body="";
user : UserModel;
editmode : boolean = false;
editbutton = "수정하기";

@HostListener('scroll') scroll(){
  console.log('sfsef')
}

  constructor(private Feedback : FeedbackService, private Userinfo : UserinfoService) { }

  ngOnInit() {
    this.Feedback.getComments().subscribe(
      comment => {
        this.comments = comment;

        console.log(this.comments);
      },
      err => console.log(err),
      () => console.log('success')
    )

    this.Userinfo.getUserSelf().subscribe(
      user => {
        this.user = user;
        console.log(user);
      },
      err => alert(err)
    );
  }

  changeMode(){
    this.editmode = !this.editmode;

    if(this.editmode === true)
      this.editbutton = "취소하기"
    else
      this.editbutton = "수정하기"
  }

  userCheck(info) : boolean{
    var result : boolean = false;

    if(this.user.login_status === true)
          result = (this.user.user_json._providor === info._providor) && (this.user.user_json._email === info._email);

    console.log(this.user);
    console.log(info);
    console.log(result);
    return result;
  }

  clickDel(id : string){
    console.log(id);

    if(confirm("정말 지우시겠습니까?") == true){
      this.Feedback.delComment(id).subscribe(
        result => {
          alert(result.message);
          window.location.reload();
        }
      )
    }
  }

  clickPost(){
    var body = {
      'comment' : this.body
    }

    this.Feedback.postComment(body).subscribe(
      result => {
        alert(result.message);
      },
      err => alert(err),
      () => {
        console.log(this.body);
        window.location.reload();
      }
    )
  }

  clickPut(id, recomment){
    var body = {
      '_comment' : recomment
    }

    console.log(body);

    this.Feedback.putComment(id, body).subscribe(
      result => {
        alert(result.message);
      },
      err => alert('오류 : ' + err),
      () => {
        console.log(this.body);
        window.location.reload();
      }
    )
  }
}
