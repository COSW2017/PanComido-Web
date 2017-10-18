import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  
  registerForm : FormGroup;
  public load : Boolean;

  constructor(public router: Router,
    public usersService : UsersService,
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.load = false;
    this.registerForm = this.formBuilder.group({
      firstName: new FormControl ('', Validators.required),
      lastName: new FormControl ('', Validators.required),
      email: new FormControl ('', Validators.compose([Validators.required, Validators.email])),
      city: new FormControl ('', Validators.required),
      phone: new FormControl ('', Validators.compose([Validators.required, Validators.min(1111111), Validators.max(9999999999)])),
      password: new FormControl ('', Validators.compose([Validators.required, Validators.minLength(4)])),
      image: '',
      restaurant: false
    });
  }

  register() {
    if(this.registerForm.valid){
      this.load = true;
      this.usersService.create(
        this.registerForm.get('email').value,
        this.registerForm.get('password').value,
        this.registerForm.get('firstName').value, 
        this.registerForm.get('lastName').value,
        this.registerForm.get('image').value, 
        this.registerForm.get('city').value,
        this.registerForm.get('phone').value).subscribe(data => {
          this.load = false;
          if (this.registerForm.get('restaurant').value){
            this.usersService.actualUser = data;
            this.router.navigate(['/registerR']); ///mirar bien la direccion
          }else{
            this.router.navigate(['/login']);    
          }
      });
    }
  }
}
