import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {User} from "./state/user.model";
import {UsersService} from "./state/users.service";
import {UsersQuery} from "./state/users.query";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  public users$: Observable<User[]>;

  constructor(private usersService: UsersService, private usersQuery: UsersQuery) {
  }

  ngOnInit() {
  }

}
