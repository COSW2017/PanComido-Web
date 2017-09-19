import { Injectable } from '@angular/core';

@Injectable()
export class AppDataService {
  private _accessToken: string | null = null;
  private _email: string | null = null;

  public set accessToken(accessToken: string) {
    this._accessToken = accessToken;
    localStorage.setItem('AT', accessToken);
  }

  public get accessToken(): string {
    if (!this._accessToken) {
      this._accessToken = localStorage.getItem('AT');
    }
    return this._accessToken;
  }

  public set email(email: string) {
    this._email = email;
    localStorage.setItem('email', email);
  }

  public get email(): string {
    if (!this._email) {
      this._email = localStorage.getItem('email');
    }
    return this._email;
  }

  constructor() { }

  public removeAccessToken() {
    this._accessToken = null;
    localStorage.removeItem('AT');
  }
}
