import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services';
import { UserModel } from '../../models';

@Component({
  selector: 'ip-header',
  styleUrls: ['./header.component.css'],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  public user: UserModel;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.user.subscribe((user) => this.user = user);
  }

  public goToLogin(): void {
    this.router.navigate(['login']);
  }

  public goToRegister(): void {
    this.router.navigate(['register']);
  }

  public doSignOut(): void {
    this.authService.logout();
    this.router.navigateByUrl(`/product-management`);
  }
}
