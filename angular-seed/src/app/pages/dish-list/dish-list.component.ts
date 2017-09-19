import { Component, OnInit } from '@angular/core';
import {Dish} from "../../models/dish";
import {User} from "../../models/user";
import {RestaurantService} from "../../services/restaurant.service";
import {UsersService} from "../../services/users.service";
import {AuthService} from "../../common/auth.service";
import {Router} from "@angular/router";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {

    public dishes: Dish[] = [];
    private user: User;
    constructor(public restaurantService: RestaurantService,
                public usersService: UsersService,
                public authService: AuthService,
                public router: Router,
                public orderService: OrderService,) { }

    ngOnInit() {
        this.usersService.find(this.authService.email).subscribe(userResponse => {
            this.user = userResponse;
            this.restaurantService.getDishes(this.user.restaurant.id_restaurant).subscribe(restaurantResponse => {
                this.dishes = restaurantResponse;
                console.log(this.dishes);
            });
        });
    }

    deleteDish(dish: Dish){

    }

}
