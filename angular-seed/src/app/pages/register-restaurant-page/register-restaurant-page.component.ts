import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RestaurantService } from '../../services/restaurant.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-restaurant-page',
  templateUrl: './register-restaurant-page.component.html',
  styleUrls: ['./register-restaurant-page.component.css']
})
export class RegisterRestaurantPageComponent implements OnInit {
  registerRestaurantForm : FormGroup;
  
  constructor(public formBuilder: FormBuilder,
    public restaurantService: RestaurantService,
    public router: Router) { }

  ngOnInit() { 
    this.registerRestaurantForm = this.formBuilder.group({
      Rname: '',
      latitude: '',
      longitude: ''
    });
  }

  register(){
    this.restaurantService.register(
      this.registerRestaurantForm.get('Rname').value,
      this.registerRestaurantForm.get('latitude').value,
      this.registerRestaurantForm.get('longitude').value).subscribe(data =>{
        this.router.navigate(['/login']);   
      });
  }

}
