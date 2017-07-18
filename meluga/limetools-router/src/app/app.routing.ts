import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "app/home/home.component";
import { AboutComponent } from "app/about/about.component";
import { NotFoundComponent } from "app/not-found/not-found.component";

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

export const appRouting = RouterModule.forRoot(appRoutes);