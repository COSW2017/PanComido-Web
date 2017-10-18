import { Component, OnInit } from '@angular/core';
import { Dish } from '../../models/dish';
import { User } from '../../models/user';
import { RestaurantService } from '../../services/restaurant.service';
import { OrderService } from '../../services/order.service';
import { Command } from '../../models/command';

@Component({
  selector: 'app-order-detail-page',
  templateUrl: './order-detail-page.component.html',
  styleUrls: ['./order-detail-page.component.css']
})
export class OrderDetailPageComponent implements OnInit {
  private command: Command;
  private dishes: Dish[];
  //private users: string;
  private state: Number;
  constructor(public restaurantService: RestaurantService,
    public orderService: OrderService,) { }

  ngOnInit() {
    this.restaurantService.getDishesByCommandId(this.orderService.id_command).subscribe(restaurantResponse => {
      this.dishes = restaurantResponse;
      this.restaurantService.getCommandById(this.orderService.id_command).subscribe(commandResponse => {
        this.command = commandResponse;
        this.state = this.command.state;
      });
    });
  }//falta capturar los errores :P

}
