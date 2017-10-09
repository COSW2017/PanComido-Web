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

@Injectable()
export class RestaurantService extends APIService {

  private resourceUrl = 'restaurant/'
  private restaurant: Restaurant;
  
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

  getCommandById(id_Command: Number): Observable <Command>{
    return this.get(this.resourceUrl + "/commands/" + id_Command);
  }

  addDish(id: Number, name: string, price: Number, description: string, id_restaurant: Number) {
      return this.post(this.resourceUrl + id_restaurant + '/dish', new Dish(id, name , price, description));
  }

  deleteDish(id_dish : Number, id_restaurant: Number){
    return this.delete(this.resourceUrl + id_restaurant + '/dish/' + id_dish);
  }

  register(name: string, latitude: Number, longitude: Number, user_id: Number){
    this.restaurant =new Restaurant(name, latitude, longitude, 0, 0, 0, 0, new Array<Order>(), new Array<Comment>());
    this.restaurant.user_id = user_id;
    return this.post(this.resourceUrl + 'register', this.restaurant);
  }

}
