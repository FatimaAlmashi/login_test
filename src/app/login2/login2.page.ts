import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
// import { HTTP } from '@ionic-native/http/ngx';
// import 'rxjs/Rx';
// declare var xml2json: any;
// import 'rxjs/add/operator/map'

import { HTTP } from '@ionic-native/http/ngx';


const loginUrl  = 'https://wsrv.holymakkah.gov.sa/HMM_SB/Mathwa/Service1.svc/rest/login?';

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

  constructor(private router: Router, fb: FormBuilder, private http:HttpClient, private http2: HTTP) { 
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

    this.router.navigate(['list']);
    console.log('>>>>>> onSubmit <<<<<<')
    const res = this.http.get(loginUrl + 'user_name=' + this.username + '&password=' + this.password, {}).pipe(map(res => {return res;}));
    console.log('>>>>>> res.pipe = ', res.pipe)

  //   const url = loginUrl + 'user_name=' + this.username + '&password=' + this.password

  //   this.http2.get(url, {}, {})
  //   .then(data => {
  //     console.log(data.status);
  //     console.log(data.data); // data received by server
  //     console.log(data.headers);
  //   })
  //   .catch(error => {
  //     console.log(error.status);
  //     console.log(error.error); // error message as string
  //     console.log(error.headers);
  //   });
  }

  backToMain() {
    console.log('>>>>>> backToMain <<<<<<');
    this.router.navigate(['']);
  }

}
