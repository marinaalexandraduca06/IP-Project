import { Component, OnInit } from '@angular/core';

import { UserModel } from '../../models/index';
import { AuthService } from '../../services/index';

@Component({
  selector: 'ip-product-management',
  styleUrls: ['./product-management.component.css'],
  templateUrl: './product-management.component.html'
})
export class ProductManagementComponent implements OnInit {
  public user: UserModel;

  constructor(private authService: AuthService) { }

  public ngOnInit(): void {
    this.authService.user.subscribe((user) => this.user = user);
  }
}
