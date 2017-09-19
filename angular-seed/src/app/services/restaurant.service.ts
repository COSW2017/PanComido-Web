import { Injectable } from '@angular/core';
import { APIService } from "../common/api.service";
import { Http } from '@angular/http';
import { AppConfiguration } from '../common/app-configuration.service';
import { Observable } from 'rxjs/Observable';
import { Order } from '../models/order';
import { AuthService } from '../common/auth.service';
import { Restaurant } from "../models/restaurant";
import { Dish } from "../models/dish";

@Injectable()
export class RestaurantService extends APIService {

  private resourceUrl = 'restaurant'
  
  constructor(
    public config: AppConfiguration,
    public authService: AuthService,
    public http: Http
  ) {
    super(config, authService, http);
  }

  getOrders(id: Number): Observable <Order[]>{
    return this.get(this.resourceUrl+"/"+id+"/"+"order");
  }

  create(name: string, latitude: Number, longitude: Number){
    return this.post(this.resourceUrl+"/register", new Restaurant(name, latitude, longitude, 0, 0, 0, 0, [] as Order[], [] as Comment[], [] as Dish[]));
  }

}
