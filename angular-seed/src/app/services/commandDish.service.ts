import { Injectable } from '@angular/core';
import { APIService } from "../common/api.service";
import { Http } from '@angular/http';
import { AppConfiguration } from '../common/app-configuration.service';
import { AuthService } from '../common/auth.service';
import { Dish } from "../models/dish";
import { Command } from '../models/command';

@Injectable
export class CommandDishService extends APIService {

  private resourceUrl = 'commandDish/'

  constructor(
    public config: AppConfiguration,
    public authService: AuthService,
    public http: Http
  ) {
    super(config, authService, http);
  }

  addDishC(id_dish : Number, id_command: Number){
    return this.post(this.resourceUrl + id_command + id_dish);
  }

  deleteDishC(id_dish : Number, id_command: Number){
    return this.delete(this.resourceUrl + id_command + id_dish);
  }

}