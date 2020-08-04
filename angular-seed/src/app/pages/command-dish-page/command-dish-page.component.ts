import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
import { CommandDishService } from '../../services/commandDish.service';
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

    public load: boolean;
    public dishes: Dish[] = [];
    private user: User;
    private restaurant: Restaurant;
    public error: string;

    constructor(public restaurantService: RestaurantService,
    public CommandDishService: CommandDishService,
    public usersService: UsersService,
    public authService: AuthService,
    public router: Router,
    public orderService: OrderService,) {}

    ngOnInit() {
      this.load = true;
     
    }

    addDishC(id_dish : Number) {
      this.load = true;
      this.error = null;
      this.CommandDishService.addDishC(id_dish, this.orderService.id_command
      ).subscribe(serverResponse => { 

      });

    }

}