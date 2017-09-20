import {Component, OnInit} from '@angular/core';
import { AuthService } from './common/auth.service';
import { User } from './models/user';
import { UsersService } from './services/users.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  foundUser: User;
  error: String;
  searchForm: FormGroup;
  constructor(
    public authService: AuthService,
    public usersService: UsersService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
      this.searchForm = this.formBuilder.group({
          search: ''
      });
  }

  onSubmit() {
      this.foundUser = null;
      this.error = '';
    this.usersService.find(this.searchForm.get('search').value).subscribe(findResponse => {
        this.foundUser = findResponse;
    },
      error => {
          this.error = (error && error.message ? error.message : '');
    });
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  signOut() {
    this.authService.signOut();
  }
}
