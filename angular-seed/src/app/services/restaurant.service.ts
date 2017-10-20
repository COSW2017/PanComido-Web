import { Injectable } from '@angular/core';
import { APIService } from "../common/api.service";
import { Http } from '@angular/http';
import { AppConfiguration } from '../common/app-configuration.service';
import { Observable } from 'rxjs/Observable';
import { Order } from '../models/order';
import { AuthService } from '../common/auth.service';
import {Dish} from "../models/dish";
import { Restaurant } from '../models/restaurant';
import { Command } from '../models/command';
import { User } from '../models/user';

@Injectable()
export class RestaurantService extends APIService {

  private resourceUrl = 'restaurant/'
  private restaurant: Restaurant;
  private dish : Dish;
  
  constructor(
    public config: AppConfiguration,
    public authService: AuthService,
    public http: Http
  ) {
    super(config, authService, http);
  }

  getOwner(user_id: Number): Observable <Restaurant>{
    return this.get(this.resourceUrl +"owner/"+ user_id)
  }

  getCommands(id_restaurant: Number): Observable <Command[]>{
    //return this.get(this.resourceUrl+"/"+id_restaurant+"/"+"order");
    return this.get(this.resourceUrl + id_restaurant +"/commands");
  }

  getDishes(id: Number): Observable <Dish[]>{
      return this.get(this.resourceUrl + id + '/dish');
  }

  getDishByDishId(id_dish: Number, id_restaurant : Number): Observable <Dish>{
    return this.get(this.resourceUrl + id_restaurant + "/dish/" + id_dish);
  }

  getCommandById(id_Command: Number): Observable <Command>{
    return this.get(this.resourceUrl + "commands/" + id_Command);
  }

  getDishesByCommandId(id_Command: Number): Observable <Dish[]>{
    return this.get(this.resourceUrl + "commands/" + id_Command+"/dish");
  }

  addDish(name: string, price: Number, description: string, prep_time: Number, restaurant: Restaurant) {
      return this.post(this.resourceUrl + restaurant.id_restaurant + '/dish', new Dish(name , price, description, prep_time, restaurant));
  }

  deleteDish(id_dish : Number, id_restaurant: Number){
    return this.delete(this.resourceUrl + id_restaurant + '/dish/' + id_dish);
  }

  modifyDish(name: string, price: Number, description: string, prep_time: Number, dish: Dish) {
    this.dish = new Dish(name , price, description, prep_time, dish.restaurant);
    this.dish.id_dish = dish.id_dish;
    return this.put(this.resourceUrl + dish.restaurant.id_restaurant + '/dish', this.dish);
  }

  register(name: string, latitude: Number, longitude: Number, user_id: User){
    this.restaurant =new Restaurant(name, latitude, longitude);
    this.restaurant.user_id = user_id;
    return this.post(this.resourceUrl + 'register', this.restaurant);
  }

  changeCommandState(command : Command, id_restaurant : Number){
    return this.put(this.resourceUrl+id_restaurant+'/command', command); 
  }
  
  update(restaurant: Restaurant){
    console.log("enviando");
    return this.put(this.resourceUrl + 'update', restaurant);
  }

  getRestaurantOrders(id_restaurant: Number){
    return this.get(this.resourceUrl + id_restaurant + '/order');
  }

}
