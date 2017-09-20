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
    this.registerForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      city: '',
      phone: '',
      password: '',
      image: ''
    });
  }

  register() {
    this.usersService.create(
      this.registerForm.get('email').value,
      this.registerForm.get('password').value,
      this.registerForm.get('firstName').value, 
      this.registerForm.get('lastName').value,
      this.registerForm.get('image').value, 
      this.registerForm.get('city').value,
      this.registerForm.get('phone').value).subscribe(data => {
          this.router.navigate(['/login']);
        }
    );
  }
}
