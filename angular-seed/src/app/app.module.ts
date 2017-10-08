import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppConfiguration } from './common/app-configuration.service';
import { INITIAL_CONFIG } from './common/initial-config';

import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';

import { AppDataService } from './common/app-data.service';

import { AuthService } from './common/auth.service';

import { APIService } from './common/api.service';

import { UsersService } from './services/users.service';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { TaskListPageComponent } from './pages/task-list-page/task-list-page.component';
import { TaskEditPageComponent } from './pages/task-edit-page/task-edit-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TodoService } from './services/todo.service';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { UserListPageComponent } from './pages/user-list-page/user-list-page.component';
import { UserEditPageComponent } from './pages/user-edit-page/user-edit-page.component';
import { OrderListPageComponent } from './pages/order-list-page/order-list-page.component';
import { RestaurantService } from './services/restaurant.service';
import { OrderDetailPageComponent } from './pages/order-detail-page/order-detail-page.component';
import { OrderService } from './services/order.service';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { DishListComponent } from './pages/dish-list/dish-list.component';
import { RegisterRestaurantPageComponent } from './pages/register-restaurant-page/register-restaurant-page.component';


const ROUTES = [
  { path: '', component: SignInPageComponent },
  { path: 'home', component: HomePageComponent },
  {
    path: 'tasks', component: TaskListPageComponent,
    canActivate: [AuthService],
  },
  {
    path: 'login', component: SignInPageComponent,
    canActivate: [AuthService],
  },
  {
    path: 'register', component:  RegisterPageComponent,
  },
  {
    path: 'users', component: UserListPageComponent,
    canActivate: [AuthService],
  },
  {
    path: 'edit', component: TaskEditPageComponent,
    canActivate: [AuthService],
  },
  {
    path: 'user_edit', component: UserEditPageComponent,
    canActivate: [AuthService],
  },
  {
    path: 'order', component: OrderListPageComponent,
    canActivate: [AuthService],
  },
  {
    path: 'orderDetail', component: OrderDetailPageComponent,
    canActivate: [AuthService],
  },
  {
    path: 'registerR', component: RegisterRestaurantPageComponent,
    
  },
  {
      path: 'dish', component: DishListComponent,
      canActivate: [AuthService],
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TaskListPageComponent,
    TaskEditPageComponent,
    PageNotFoundComponent,
    SignInPageComponent,
    UserListPageComponent,
    UserEditPageComponent,
    OrderListPageComponent,
    OrderDetailPageComponent,
    RegisterPageComponent,
    DishListComponent,
    RegisterRestaurantPageComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    {
      provide: INITIAL_CONFIG,
      useValue: {
        apiURL: 'http://localhost:8080'
      }
    },
    TodoService,
    AppConfiguration,
    AuthService,
    AppDataService,
    APIService,
    UsersService,
    RestaurantService,
    OrderService,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
