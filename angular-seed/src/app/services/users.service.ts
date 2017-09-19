import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { APIService } from './../common/api.service';
import { AuthService } from './../common/auth.service';
import { AppConfiguration } from './../common/app-configuration.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Restaurant } from '../models/restaurant';

@Injectable()
export class UsersService extends APIService {

  private itemsUrl = 'user/items/';
  private createUrl = 'user/register/';
  private findUrl = 'user/search/';

  constructor(
    public config: AppConfiguration,
    public authService: AuthService,
    public http: Http
  ) {
    super(config, authService, http);
  }
  /*
  login(username: string, password: string) {
       // Mock
       this.authService.accessToken = 'test_access_token';
       return Observable.of({ access_token: this.authService.accessToken });
  }*/

  list(): Observable<User[]> {
    return this.get(this.itemsUrl);
  }

  create(email: string, password: string, firstname: string, lastname: string, image: string, username: string) {
    return this.post(this.createUrl, new User(email, password, firstname, lastname, image, username));
  }

  find(email: string): Observable<User> {
    return this.get(this.findUrl+"?email="+email);
  }

  login(email: string, password: string) {
    return this.post('user/login', { email, password }, { credentials: false }).map(loginResponse => {
      if (loginResponse) {
        this.authService.accessToken = loginResponse.accessToken;
        this.authService.email = email;
      }
    });
  }
}
