import { Injectable } from '@angular/core';
import { APIService } from "../common/api.service";
import { Http } from '@angular/http';
import { AppConfiguration } from '../common/app-configuration.service';
import { Observable } from 'rxjs/Observable';
import { Order } from '../models/order';
import { AuthService } from '../common/auth.service';

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

  getOrderById(id_restaurant: Number, id_order: Number): Observable <Order>{
    console.log(id_restaurant, id_order, "en restaurantService");
    return this.get(this.resourceUrl+"/"+id_restaurant+"/"+"order/"+id_order);
  }

}
