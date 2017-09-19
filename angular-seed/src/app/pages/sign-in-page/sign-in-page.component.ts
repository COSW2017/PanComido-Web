import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {
  signInForm : FormGroup;
  loginError : string;
  constructor(
    public usersService : UsersService,
    public formBuilder: FormBuilder,
    public router: Router,
  ) { }

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  doLogin() {
    this.usersService.login(
      this.signInForm.get('username').value,
      this.signInForm.get('password').value).subscribe(loginResponse => {
        this.router.navigate(['order']);
      }, error => {
        this.loginError = 'Error Signing in: ' + (error && error.message ? error.message : '');
      });
  }

}
