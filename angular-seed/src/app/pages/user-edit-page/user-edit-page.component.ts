import { UsersService } from '../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-edit-page',
  templateUrl: './user-edit-page.component.html',
  styleUrls: ['./user-edit-page.component.css']
})
export class UserEditPageComponent implements OnInit {

  userForm: FormGroup;
  constructor(
    public userService: UsersService,
    public formBuilder: FormBuilder,
    public router: Router,
  ) {

  }
  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstname: '',
      lastname: '',
      password: '',
      image: '',
        username: '',
        email: ''
    });
  }

  onSubmit() {
    this.userService.create(
      this.userForm.get('email').value,
      this.userForm.get('password').value,
      this.userForm.get('firstName').value, 
      this.userForm.get('lastName').value,
      this.userForm.get('image').value, 
      this.userForm.get('city').value,
      this.userForm.get('phone').value).subscribe(serverResponse => {
        this.router.navigate(['/users']);
    }, error => {
      console.log(error);
    });
  }

}
