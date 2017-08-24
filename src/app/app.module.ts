import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { DataService } from '../service/data.service'

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { HomeHeadComponent } from '../components/home/head/head.component';
import { HomeEntityComponent } from '../components/home/entity/entity.component';
import { HomeProductComponent } from '../components/home/product/product.component';

import { NewPage } from '../pages/new/new';
import { NewSubjectComponent } from '../components/new/subject/subject.component';
import { NewProductComponent } from '../components/new/product/product.component';

import { TaoPage } from '../pages/tao/tao';
import { TaoGrabComponent } from '../components/tao/grab/grab.component';
import { TaoSaleComponent } from '../components/tao/sale/sale.component';
import { TaoProductComponent } from '../components/tao/product/product.component'
import { TaoCrossComponent } from '../components/tao/cross/cross.component'

import { SearchPage } from '../pages/search/search';

import { UserCenterPage } from '../pages/userCenter/userCenter';

import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage, HomeHeadComponent, HomeEntityComponent, HomeProductComponent,
    NewPage, NewSubjectComponent, NewProductComponent, 
    TaoPage, TaoGrabComponent, TaoSaleComponent, TaoProductComponent, TaoCrossComponent,
    SearchPage,
    UserCenterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp, NewPage, TaoPage, SearchPage, UserCenterPage, HomePage, TabsPage
  ],
  providers: [
    DataService,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
