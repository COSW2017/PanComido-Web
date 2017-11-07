import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { RestaurantService } from '../../services/restaurant.service';
import { Router } from '@angular/router';
import { Restaurant } from '../../models/restaurant';
import { UsersService } from '../../services/users.service';
@Component({
  selector: 'app-register-restaurant-page',
  templateUrl: './register-restaurant-page.component.html',
  styleUrls: ['./register-restaurant-page.component.css']
})
export class RegisterRestaurantPageComponent implements OnInit {
  registerRestaurantForm : FormGroup;
  restaurant : Restaurant; 
  public load : Boolean;

  public error: string;
  
  constructor(public formBuilder: FormBuilder,
    public userService : UsersService,
    public restaurantService: RestaurantService,
    public router: Router) { }

  ngOnInit(): void {
    this.load = false;
    this.registerRestaurantForm = this.formBuilder.group({
      Rname: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
      latitude: new FormControl ('', Validators.compose([Validators.required, Validators.min(-90), Validators.max(90)])),
      longitude: new FormControl ('', Validators.compose([Validators.required, Validators.min(-180), Validators.max(180)])),
      image: new FormControl ('')
    });
  }

  register(){
    if(this.registerRestaurantForm.valid){
      this.load = true;
      this.error = '';
      this.restaurantService.register(
        this.registerRestaurantForm.get('Rname').value,
        this.registerRestaurantForm.get('latitude').value,
        this.registerRestaurantForm.get('longitude').value,
        this.registerRestaurantForm.get('image').value,
        this.userService.actualUser).subscribe(data =>{
          this.load = false;
          //this.restaurant = data;
          this.router.navigate(['/login']);
        },err =>{
          this.load = false;
          this.error = err.error;
        });
    }else{

    }
  }
}
