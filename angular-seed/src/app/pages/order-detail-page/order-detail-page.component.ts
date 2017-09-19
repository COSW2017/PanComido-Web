import { Component, OnInit } from '@angular/core';
import { Dish } from '../../models/dish';
import { User } from '../../models/user';
import { Order } from '../../models/order';
import { RestaurantService } from '../../services/restaurant.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-detail-page',
  templateUrl: './order-detail-page.component.html',
  styleUrls: ['./order-detail-page.component.css']
})
export class OrderDetailPageComponent implements OnInit {
  private order: Order;
  private dishes: Dish[];
  //private users: string;
  private state: Number;
  constructor(public restaurantService: RestaurantService,
    public orderService: OrderService,) { }

  ngOnInit() {
    this.restaurantService.getOrderById(this.orderService.id_restaurant, this.orderService.id_order).subscribe(restaurantResponse => {
      this.order = restaurantResponse;
      this.dishes = this.order.dishes;
      this.state = this.order.state;
      //this.users = this.order.users;
    });
  }

}
