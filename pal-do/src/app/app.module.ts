import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';



import * as firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyCFKyHrInCcTkex1VLLKo_vKKxy7m0Uwag",
    authDomain: "pal-do-db.firebaseapp.com",
    databaseURL: "https://pal-do-db.firebaseio.com",
    projectId: "pal-do-db",
    storageBucket: "",
    messagingSenderId: "835281347085",
    appId: "1:835281347085:web:d481a23109beda69"
  });

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}