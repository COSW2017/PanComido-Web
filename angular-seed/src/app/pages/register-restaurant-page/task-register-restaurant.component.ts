import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo';
import { UsersService } from "../../services/users.service";
import { RestaurantService } from "../../services/restaurant.service";

@Component({
  selector: 'app-task-register-restaurant-page',
  templateUrl: './task-register-restaurant.component.html',
  styleUrls: ['./task-register-restaurant.component.css']
})
export class ResgitroRestauranteComponent implements OnInit {
  restaurantForm: FormGroup;
  constructor(
    public userService: UsersService,
    public restaurantService : RestaurantService, 
    public formBuilder: FormBuilder,
    public router: Router,
  ) {

  }
  ngOnInit() {
    this.restaurantForm = this.formBuilder.group({
      firstname: '',
      lastname: '',
      cellphone: '', 
      city: '', 
      email: '',
      password: '',
      image: '', 
      restaurant_name: '', 
      restaurant_latitude: 0, 
      restaurant_longitude: 0
    });
  }

  onSubmit() {

    //Crear restaurante
    this.restaurantService.create(
      this.restaurantForm.get('restaurant_name').value,
      this.restaurantForm.get('restaurant_latitude').value,
      this.restaurantForm.get('restaurant_longitude').value
    ).subscribe(serverResponse => {
      //Crear usuario
      this.userService.create(
        this.restaurantForm.get('firstname').value,
        this.restaurantForm.get('lastname').value,
        this.restaurantForm.get('cellphone').value, 
        this.restaurantForm.get('city').value, 
        this.restaurantForm.get('email').value, 
        this.restaurantForm.get('password').value,
        this.restaurantForm.get('image').value, 
        serverResponse
      ).subscribe(serverResponse => {
          this.router.navigate(['/home']);
      }, error => {
        console.log(error);
      });
    }, error => {
      console.log(error);
    });
  
  }

}
