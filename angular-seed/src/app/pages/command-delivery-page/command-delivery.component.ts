import { Component, OnInit } from '@angular/core';
import { Command } from "../../models/command";
import { User } from "../../models/user";
import { Restaurant } from "../../models/restaurant";
import { RestaurantService } from "../../services/restaurant.service";
import { UsersService } from "../../services/users.service";
import { AuthService } from "../../common/auth.service";
import { OrderService } from "../../services/order.service";
import { Route, Router } from '@angular/router';
import { Order } from "../../models/order";


@Component({
  selector: 'app-command-delivery-page',
  templateUrl: './command-delivery.component.html',
  styleUrls: ['./command-delivery.component.css']
})
export class CommandDeliveryPageComponent implements OnInit {

  public commands: Command[] = [];
  private user: User;
  public orders : Order[] = []; 
  private restaurant: Restaurant;
  public load : boolean;

  constructor(public restaurantService: RestaurantService,
    public usersService: UsersService,
    public authService: AuthService,
    public router: Router,
    public orderService: OrderService,) { }

  
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

        this.restaurantService.getRestaurantOrders(this.restaurant.id_restaurant).subscribe(restaurantRespose=>{
          this.orders = restaurantRespose;
          this.load = false;
        })
      });
      //falta captar el error
    });
  }

}
