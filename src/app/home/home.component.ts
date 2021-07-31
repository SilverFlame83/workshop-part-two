import { Component } from '@angular/core';
import { ContentService } from '../content.service';
import { ITheme } from '../shared/interfaces';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  
  get isLogged(): boolean{
    return this.userService.isLogged;
  }
  constructor(private userService: UserService) {}
}
