import { Routes } from '@angular/router';

import * as Cmp from './components';
import { LoginPageMode } from './app.enums';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'product-management',
    pathMatch: 'full' },
  {
    path: 'login',
    component: Cmp.LoginRegisterComponent,
    data: {
      type: LoginPageMode.login
    }
  },
  {
    path: 'register',
    component: Cmp.LoginRegisterComponent,
    data: {
      type: LoginPageMode.register
    }
  },
  {
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'product-list'
      },
      {
        component: Cmp.ProductListComponent,
        data: {
          animation: {
            index: 3
          }
        },
        path: 'product-list'
      },
      {
        component: Cmp.ProductDetailsComponent,
        path: 'product-details/:id'
      }
    ],
    component: Cmp.ProductManagementComponent,
    data: {
      animation: {
        index: 1
      }
    },
    path: 'product-management'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];
