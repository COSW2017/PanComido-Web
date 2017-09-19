import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  registerForm : FormGroup;

  constructor(
    public router: Router,
    public usersService : UsersService,
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
  }

  register() {

  }
}
