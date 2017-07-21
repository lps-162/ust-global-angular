
import { HomeComponent } from 'app/home/home.component';
import { AboutComponent } from 'app/about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from "app/not-found/not-found.component";
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from "app/login/login.component";


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);