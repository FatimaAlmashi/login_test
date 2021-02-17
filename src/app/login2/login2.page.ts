import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';


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

    console.log('>>>>>> onSubmit <<<<<<')
    const loginUrl  = 'https://wsrv.holymakkah.gov.sa/HMM_SB/Mathwa/Service1.svc/rest/login?';
    const res = this.http.get(loginUrl + 'user_name=' + this.username + '&password=' + this.password, {}).subscribe(res => {console.log(res)});
    console.log('>>>>>> res = ', res)
    this.router.navigate(['list']);

  }

  backToMain() {
    // console.log('>>>>>> backToMain <<<<<<');
    // this.router.navigate(['']);
  }
}
