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
  selector: 'app-order-list-page',
  templateUrl: './order-list-page.component.html',
  styleUrls: ['./order-list-page.component.css']
})

export class OrderListPageComponent implements OnInit {
  public commands: Command[] = [];
  private user: User;
  private restaurant: Restaurant;
  public load : boolean;
  
  constructor(public restaurantService: RestaurantService,
    public usersService: UsersService,
    public authService: AuthService,
    public router: Router,
    public orderService: OrderService,) { }

  viewOrder(id_command: Number){
    //Parametros que recibe orderDertail
    this.orderService.id_command = id_command;
    //ir a order detail
    this.router.navigate(['orderDetail']);
  }

  changeCommandState(command: Command, state: Number){
    this.orderService.id_command = command.id_command;
    command.state= state; 
    this.restaurantService.changeCommandState(command, this.restaurant.id_restaurant).subscribe(commandResponse =>{
      command.state=commandResponse.state; 
    }); 
  }

  ngOnInit() {
    this.load = true;
    //conocer el usuario propietario del restaurante
    this.usersService.find(this.authService.email).subscribe(userResponse => {
      this.user = userResponse;
      //obtener el restaurante del que es propietario
      this.restaurantService.getOwner(this.user.user_id).subscribe(restaurantRespose => {
        
        this.restaurant = restaurantRespose;
        //obtener la lista de pedidos del restaurante  
        this.restaurantService.getCommands(this.restaurant.id_restaurant).subscribe(restaurantResponse => {
          this.commands = restaurantResponse;
          this.load = false;
        });
      });
      //falta captar el error
    });
  }

}
