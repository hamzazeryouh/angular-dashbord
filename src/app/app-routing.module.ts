import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CausePageComponent } from './Pages/cause-page/cause-page.component';
import { ClientsPageComponent } from './Pages/clients-page/clients-page.component';
import { DashboardPageComponent } from './Pages/dashboard-page/dashboard-page.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { UsersPageComponent } from './Pages/users-page/users-page.component';

const routes: Routes = [
  
    { path: 'Users', component: UsersPageComponent },
    { path: 'Client', component: ClientsPageComponent },
    { path: 'Dashbord', component: DashboardPageComponent },
    { path: 'Cause', component: CausePageComponent },
    { path: '**', component: PageNotFoundComponent },
    { path: '',   redirectTo: '/Dashbord', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
