import { Component, OnInit } from '@angular/core';
import { Dish } from '../../models/dish';
import { RestaurantService } from '../../services/restaurant.service';
import { OrderService } from '../../services/order.service';
import { UsersService } from '../../services/users.service';
import { AuthService } from '../../common/auth.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dish-detail-page',
  templateUrl: './dish-detail-page.component.html',
  styleUrls: ['./dish-detail-page.component.css']
})
export class DishDetailPageComponent implements OnInit {

  private dish: Dish;
  private load: Boolean;
  dishDetailForm : FormGroup;

  private state: Number;
  constructor(public restaurantService: RestaurantService,
    public usersService : UsersService,
    public authService: AuthService,
    public orderService: OrderService,
    public formBuilder: FormBuilder,
    public router : Router) { }

  ngOnInit() {
    this.load = true;
    this.dish = null;
    //conocer el usuario propietario del restaurante
    this.usersService.find(this.authService.email).subscribe(userResponse => {
      //obtener el restaurante del que es propietario
      this.restaurantService.getOwner(userResponse.user_id).subscribe(restaurantRespose => {
        //obtener la lista de pedidos del restaurante  
        this.restaurantService.getDishByDishId(this.orderService.id_command, restaurantRespose.id_restaurant).subscribe(restaurantResponse => {
          this.dish = restaurantResponse;
          //lamar funcion para cargar valores
          this.loadForm();
          this.load = false;
        });
      });
    });//falta capturar los errores :P
  }

  loadForm(){
    this.dishDetailForm = this.formBuilder.group({
      name: new FormControl (this.dish.name, Validators.required),
      image: new FormControl (this.dish.image),
      price: new FormControl (this.dish.price, Validators.compose([Validators.required, Validators.min(1)])),
      description: new FormControl (this.dish.description, Validators.required),
      prep_time: new FormControl (this.dish.prep_time, Validators.compose([Validators.required, Validators.min(1)])),
    });
  }

  modifyDish() {
    if(this.dishDetailForm.valid){
      this.load = true;
      this.restaurantService.modifyDish(
        this.dishDetailForm.get('image').value,
        this.dishDetailForm.get('name').value,
        this.dishDetailForm.get('price').value,
        this.dishDetailForm.get('description').value,
        this.dishDetailForm.get('prep_time').value,
        this.dish).subscribe(data => {
          this.load = false;
          this.router.navigate(['/dish']);
      });
    }
  }
}

