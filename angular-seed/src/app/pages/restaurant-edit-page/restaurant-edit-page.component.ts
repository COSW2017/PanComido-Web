import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Restaurant } from '../../models/restaurant';
import { UsersService } from '../../services/users.service';
import { RestaurantService } from '../../services/restaurant.service';
import { User } from '../../models/user';
import { AuthService } from '../../common/auth.service';

@Component({
  selector: 'app-restaurant-edit-page',
  templateUrl: './restaurant-edit-page.component.html',
  styleUrls: ['./restaurant-edit-page.component.css']
})
export class RestaurantEditPageComponent implements OnInit {
  private editRestaurantForm : FormGroup;
  private restaurant : Restaurant; 
  private nombre: string;
  private latitude: string;
  private longitude: string;
  private user: User;
  public load : Boolean;
  
  constructor(public formBuilder: FormBuilder,
    public userService : UsersService,
    public authService: AuthService,
    public restaurantService: RestaurantService,
    public router: Router) { }

  ngOnInit(): void {
    this.load = true;
    this.userService.find(this.authService.email).subscribe(userResponse => {
      this.user = userResponse;
      //obtener el restaurante del que es propietario
      this.restaurantService.getOwner(this.user.user_id).subscribe(restaurantRespose => {
        this.restaurant = restaurantRespose;
        this.nombre = this.restaurant.name;
        this.latitude = this.restaurant.latitude+"";
        this.longitude = this.restaurant.longitude+"";
        this.setValues();
        this.load = false;  
      });
    });
    this.editRestaurantForm = this.formBuilder.group({
      Rname: '',
      latitude: '',
      longitude: '',
    });
    
  }

  public setValues(): void {
    this.editRestaurantForm = this.formBuilder.group({
      Rname: new FormControl (this.nombre, Validators.compose([Validators.required, Validators.minLength(3)])),
      latitude: new FormControl (this.latitude, Validators.compose([Validators.required, Validators.min(-90), Validators.max(90)])),
      longitude: new FormControl (this.longitude, Validators.compose([Validators.required, Validators.min(-180), Validators.max(180)])),
    });
  }

  update(){
    console.log("actualizando");
    this.load = true;
    this.restaurant.name = this.editRestaurantForm.get("Rname").value;
    this.restaurant.latitude = this.editRestaurantForm.get("latitude").value;
    this.restaurant.longitude = this.editRestaurantForm.get("longitude").value;
    this.restaurantService.update(this.restaurant).subscribe(restaurantResponse =>{
      this.restaurant = restaurantResponse;
      this.load = false;
    }, error =>{
      this.load = false;
    });
  }
  
}