import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LoginPageMode } from '../../app.enums';
import { AuthService } from '../../services';
import { UserModel } from '../../models';

@Component({
  selector: 'ip-login-register',
  styleUrls: ['./login-register.component.css'],
  templateUrl: './login-register.component.html'
})

export class LoginRegisterComponent implements OnInit {

  public isLogin: boolean;
  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;
  public passwordConfirmation: string;
  public country: string;
  public city: string;
  public phone: string;
  public address: string;
  public error: string;

  constructor(private activateRoute: ActivatedRoute, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.isLogin = this.activateRoute.snapshot.data.type === LoginPageMode.login;
  }

  public async doLogin(): Promise<void> {
    const userData = {
      email: this.email,
      password: this.password
    };
    try {
      this.authService.login(userData);
    } catch (e) {
      this.error = e;
      console.log(e);
    }
    this.router.navigate(['']);
  }

  public async doRegister(): Promise<void> {
    this.validateFields();
    if (!this.error) {
      const userData = new UserModel({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        country: this.country,
        city: this.city,
        phone: this.phone,
        address: this.address
      });
      try {
        await this.authService.register(userData);
        this.doLogin();
      } catch (e) {
        this.error = e;
        console.log(e);
      }
    }
  }

  public validateFields(): void {
    this.error = '';
    if (!this.isLogin && this.password !== this.passwordConfirmation) {
      this.error = 'Password and password confiramtion don\'t match';
    }
  }
}
