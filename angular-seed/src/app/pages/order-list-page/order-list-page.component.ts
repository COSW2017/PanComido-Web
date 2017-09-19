import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { RestaurantService } from '../../services/restaurant.service';
import { Dish } from '../../models/dish';
import { UsersService } from '../../services/users.service';
import { AuthService } from '../../common/auth.service';

@Component({
  selector: 'app-order-list-page',
  templateUrl: './order-list-page.component.html',
  styleUrls: ['./order-list-page.component.css']
})
export class OrderListPageComponent implements OnInit {
  private dishes: Dish[] = [];
  private user: User;
  constructor(public restaurantService: RestaurantService,
    public usersService: UsersService,
    public authService: AuthService) { }

  ngOnInit() {
    this.user = this.usersService.find(this.authService.email)[0];
    this.restaurantService.getOrders(this.user.restaurant.id_restaurant).subscribe(restaurantResponse => {
      this.dishes = restaurantResponse;
    });
  }

}
