import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.css']
})
export class UserListPageComponent implements OnInit {
  private users: User[] = [];
  constructor(public userService: UsersService) { }

  ngOnInit() {
    this.userService.list().subscribe(usersResponse => {
      this.users = usersResponse;
    });
  }

}
