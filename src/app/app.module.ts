import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { HomePage } from './home/home.page';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    HomePage
    ],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: '',
        component: HomePage
      }
    ]),
    IonicModule.forRoot(), 
    AppRoutingModule],
  providers: [{ 
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy

   }],
  bootstrap: [AppComponent],
})
export class AppModule {}
