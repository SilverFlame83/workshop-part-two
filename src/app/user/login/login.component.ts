import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'softuni-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  login(email: string, password:string):void{
    this.userService.login(email, password);
    const redirectURrl = this.activatedRoute.snapshot.queryParams.redirectURrl || '/';
    this.router.navigate([redirectURrl]);
  }

}
