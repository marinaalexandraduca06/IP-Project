import { Component, OnInit } from '@angular/core';

import { AuthService } from './services';

@Component({
  selector: 'ip-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.loadUserData();
  }
}
