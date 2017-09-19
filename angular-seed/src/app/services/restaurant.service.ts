import { Injectable } from '@angular/core';
import { APIService } from "../common/api.service";
import { Http } from '@angular/http';
import { AuthService } from './../common/auth.service';
import { AppConfiguration } from '../common/config/app-configuration.service';
import { Observable } from 'rxjs/Observable';
import { Order } from '../models/order';

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

}
