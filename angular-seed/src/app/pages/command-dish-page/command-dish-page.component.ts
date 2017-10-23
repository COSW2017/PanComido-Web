import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
import { Dish } from '../../models/dish';
import { UsersService } from '../../services/users.service';
import { AuthService } from '../../common/auth.service';
import { Route, Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { Restaurant } from '../../models/restaurant';
import { Command } from '../../models/command';
import { User } from '../../models/user';

@Component({
  selector: 'app-command-dish-page',
  templateUrl: './command-dish-page.component.html',
  styleUrls: ['./command-dish-page.component.css']
})

export class CommandDishPageComponent implements OnInit {


    constructor(public restaurantService: RestaurantService,
    public usersService: UsersService,
    public authService: AuthService,
    public router: Router,
    public orderService: OrderService,) {}

    ngOnInit() {
      this.load = true;

    }

    addDishC() {

    }

    deleteDishC() {

    }
}