import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './Dashbord/main/main.component';
import { SidbarComponent } from './Dashbord/sidbar/sidbar.component';
import { SearchGlobalComponent } from './Dashbord/search-global/search-global.component';
import { SubNavbarComponent } from './Dashbord/sub-navbar/sub-navbar.component';
import { DashboardPageComponent } from './Pages/dashboard-page/dashboard-page.component';
import { UsersPageComponent } from './Pages/users-page/users-page.component';
import { ClientsPageComponent } from './Pages/clients-page/clients-page.component';
import { CausePageComponent } from './Pages/cause-page/cause-page.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SidbarComponent,
    SearchGlobalComponent,
    SubNavbarComponent,
    DashboardPageComponent,
    UsersPageComponent,
    ClientsPageComponent,
    CausePageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
