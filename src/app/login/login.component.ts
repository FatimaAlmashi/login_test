import { Component, OnInit } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  // moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})


export class LoginComponent implements OnInit {

  LoginForm: FormGroup;
  username: AbstractControl;
  password: AbstractControl;

  // // public response: ResponseModel;
  // // public responseNT: ResponseModel;
  // // NT: NotificationModel;
  // service: any;
  // EMP_TYPE: string;

  constructor(private router: Router, fb: FormBuilder) { 
    this.LoginForm = fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(10), 
      ])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    });

    this.username = this.LoginForm.controls.username;
    this.password = this.LoginForm.controls.password;
    // this.service = _service;
  }

  ngOnInit() {}

  LoginUser(event){
    event.preventDefault()
    console.log(event)
    this.router.navigate(['list']);

    // console.log('username : '+this.username)
    // console.log('password : '+this.password)


    // event = event as HTMLElement
    // console.log((event.target as Element).id)

    // const target = event.target[0]

    // const username = target.getElementById('username')
    // const password = target.getElementById('password')
    
    // // console.log(username, password)
  }

}
