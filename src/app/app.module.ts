import { BrowserModule } from '@angular/platform-browser';
import {
  Injector, NgModule
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PreloadAllModules, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { COMPONENTS } from './components/index';
import { ROUTES } from './app.routes';
import { ProductService, OrderService, AuthService } from './services';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENTS
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES, {
      preloadingStrategy: PreloadAllModules,
      useHash: true
      // useHash: Boolean(history.pushState) === false
    })
  ],
  providers: [
    ProductService,
    OrderService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
