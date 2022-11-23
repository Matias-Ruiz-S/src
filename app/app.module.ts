import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

/**

import { Storage } from '@ionic/storage';

*/

//import { Camera } from '@ionic-native/camera/ngx';

/**import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner'; */

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, IonicModule.forRoot({
    rippleEffect: false,
    mode: 'md'
  })/*, Storage, IonicStorageModule.forRoot(), Camera, QRScanner*/],
  providers: [Camera, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}



/**
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'login', loadChildren: './login/login.module#LoginModule' },
      { path: 'recovery', loadChildren: './recovery/recovery.module#RecoveryModule' }
*/
