import { Component, OnInit } from '@angular/core';
import { UserinfoService } from '../service/userinfo.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../app.component.css']
})
export class RegisterComponent implements OnInit {

_name = '';
_email = '';
_pw = '';
_repw = '';

capslockAlert = false;

  formData = {
    'name' : this._name,
    'email' : this._email,
    'pw' : this._pw,
    'repw' : this._repw
  }

  constructor(private userservice : UserinfoService, private router : Router) { }

  ngOnInit() {
  }

  checkData() : boolean{
    this.formData = {
      'name' : this._name,
      'email' : this._email,
      'pw' : this._pw,
      'repw' : this._repw
    }

    console.log(this.formData);

    if(this._name === ''){
      alert('이름을 입력하세요!')
      return false;
    } else if(this._email === ''){
      alert('이메일을 입력하세요!')
      return false;
    }else if((this._pw === null) && (this._repw === null)){
      alert('비밀번호를 입력하세요!')
      return false;
    } else if(this._pw != this._repw){
      alert('비밀번호가 일치하지 않습니다.')
      return false;
    } else{
      return true;
    }
  }

  clickSubmit(){
    if(this.checkData()){
      this.userservice.register(this.formData).subscribe(
        result => {
          alert(result.message);
          if(result.result === '1'){
            this.router.navigate(['/login']);
          } else {
            this.router.navigate(['/register']);
          }
        },
        err => alert(err),
        () => {
        }
      )
    }

    
  }

  capslockCheck(event){
      if(event){
        this.capslockAlert = true;
      }
      else
        this.capslockAlert = false;

      console.log(event);
  }
}
