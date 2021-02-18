import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {LoginModel} from '../models/LoginModel';


@Component({
  selector: 'app-login2',
  // moduleId: module.id,
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})

export class Login2Page implements OnInit {

  LoginForm: FormGroup;
  username: AbstractControl;
  password: AbstractControl;

  response: LoginModel;

  constructor(
    private router: Router, 
    fb: FormBuilder,
    // _service: AppService,
    private http:HttpClient, 
    ) 
    {
    this.LoginForm = fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(5), 
      ])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    });
    this.username = this.LoginForm.controls.username;
    this.password = this.LoginForm.controls.password;


    }

  ngOnInit() {}

  onSubmit() {
    const loginUrl  = 'https://wsrv.holymakkah.gov.sa/HMM_SB/Mathwa/Service1.svc/rest/login?';
    const res = this.http.get(loginUrl + 'user_name=' + this.username + '&password=' + this.password, {}).subscribe(res => {
      console.log(res)
      this.response = new LoginModel();
      console.log('this.response.return_value = ', this.response.return_value)

      switch (this.response.code) {
        case '100':
          this.router.navigate(['list']);
          break;
        default:
          console.log('Failed to login in ! + navigate to list')
          this.router.navigate(['list']);
      }

    });

  }

}
