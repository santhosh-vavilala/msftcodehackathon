import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './main-component/dashboard/dashboard.component';
import { NotificationComponent } from './main-component/notification/notification.component';
import { TopBarComponent } from './main-component/top-bar/top-bar.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'top-bar', component: TopBarComponent },
 
 
  // { path: '',
  //   redirectTo: '/login',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 

 }
