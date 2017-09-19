import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { RestaurantService } from '../../services/restaurant.service';
import { Dish } from '../../models/dish';
import { UsersService } from '../../services/users.service';
import { AuthService } from '../../common/auth.service';
import { Order } from '../../models/order';
import { Route, Router } from '@angular/router';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-list-page',
  templateUrl: './order-list-page.component.html',
  styleUrls: ['./order-list-page.component.css']
})
export class OrderListPageComponent implements OnInit {
  private orders: Order[] = [];
  private user: User;
  constructor(public restaurantService: RestaurantService,
    public usersService: UsersService,
    public authService: AuthService,
    public router: Router,
    public orderService: OrderService,) { }

  viewOrder(id: Number){
    this.orderService.id_order = id;
    this.orderService.id_restaurant = this.user.restaurant.id_restaurant;
    console.log(this.orderService.id_order = id,  this.orderService.id_restaurant = this.user.restaurant.id_restaurant, "en list")
    this.router.navigate(['orderDetail']);
  }

  ngOnInit() {
    this.usersService.find(this.authService.email).subscribe(userResponse => {
      this.user = userResponse;
    this.restaurantService.getOrders(this.user.restaurant.id_restaurant).subscribe(restaurantResponse => {
      this.orders = restaurantResponse;
    });
  });
  }

}
