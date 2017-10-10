import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Dish} from "../../models/dish";
import {User} from "../../models/user";
import {RestaurantService} from "../../services/restaurant.service";
import {UsersService} from "../../services/users.service";
import {AuthService} from "../../common/auth.service";
import {Router} from "@angular/router";
import {OrderService} from "../../services/order.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import { Restaurant } from '../../models/restaurant';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {

    public dishes: Dish[] = [];
    private user: User;
    private restaurant: Restaurant;
    userForm: FormGroup;
    public error: string;

    @ViewChild('fileInput') fileInput: ElementRef;

    constructor(public restaurantService: RestaurantService,
                public usersService: UsersService,
                public authService: AuthService,
                public router: Router,
                public orderService: OrderService,
                public formBuilder: FormBuilder, ) { }

    ngOnInit() {
        this.usersService.find(this.authService.email).subscribe(userResponse => {
            this.user = userResponse;
            //obtener el restaurante del que es propietario
            this.restaurantService.getOwner(this.user.id).subscribe(restaurantRespose => {
                this.restaurant = restaurantRespose;
                this.restaurantService.getDishes(this.restaurant.id_restaurant).subscribe(restaurantResponse => {
                    this.dishes = restaurantResponse;
                    console.log(this.dishes);
                });
            });
        });
        this.userForm = this.formBuilder.group({
            id: '',
            name: '',
            price: '',
            description: ''
        });
    }

    onSubmit() {
        this.error = null;
        this.restaurantService.addDish(
            this.userForm.get('id').value,
            this.userForm.get('name').value,
            this.userForm.get('price').value,
            this.userForm.get('description').value,
            this.restaurant.id_restaurant
        ).subscribe(serverResponse => {
            this.restaurantService.getDishes(this.restaurant.id_restaurant).subscribe(restaurantResponse => {
                this.dishes = restaurantResponse;
                console.log(this.dishes);
                this.fileInput.nativeElement.click();
                this.userForm.reset();
            });
        }, error => {
            this.error = (error && error.message ? error.message : '');
        });
    }


    deleteDish(id_dish : Number) {
      this.error = null;
      console.log(id_dish);
      this.restaurantService.deleteDish(id_dish, this.restaurant.id_restaurant).subscribe(serverResponse => {
        console.log(serverResponse);
        this.restaurantService.getDishes(this.restaurant.id_restaurant).subscribe(restaurantResponse => {
          this.dishes = restaurantResponse;
          console.log(this.dishes);
          }, error => {
            console.log(error);
        });
      }, error => {
          this.error = (error && error.message ? error.message : '');
      });
    }

}
