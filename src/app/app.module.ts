import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Firebase 
import {firebaseConfig} from "../environments/environment";
import {AngularFireModule}from "@angular/fire";
import {AngularFireAuthModule}from "@angular/fire/auth";
import {AngularFirestoreModule, SETTINGS} from "@angular/fire/firestore"
import { InventComponent } from './componentes/invent/invent.component';
import { McComponent } from './componentes/mc/mc.component';
import { ControlComponent } from './componentes/control/control.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent,InventComponent,McComponent,ControlComponent],
  entryComponents: [InventComponent,McComponent,ControlComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  AngularFireModule.initializeApp(firebaseConfig),
  AngularFireAuthModule,
  AngularFirestoreModule,
  FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ,{provide: SETTINGS, useValue: {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
