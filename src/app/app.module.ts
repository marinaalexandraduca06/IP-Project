import { BrowserModule } from '@angular/platform-browser';
import {
  Injector, NgModule
} from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { COMPONENTS } from './components/index';
import { ROUTES } from './app.routes';
import { ProductService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { OrderService } from './services/order.service';


@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENTS
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {
      preloadingStrategy: PreloadAllModules,
      useHash: true
      // useHash: Boolean(history.pushState) === false
    })
  ],
  providers: [
    ProductService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
