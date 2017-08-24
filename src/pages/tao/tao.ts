import { Component } from '@angular/core'
import { NavController } from 'ionic-angular';

import { TaoGrab, TaoSale, TaoProduct } from '../../model/tao.model'
import { DataService } from '../../service/data.service'

@Component({
  selector: 'page-tao',
  templateUrl: 'tao.html'
})

export class TaoPage {
    
    Grab : TaoGrab
    Sale : TaoSale
    Products : Object[]

    constructor(public navCtrl: NavController, ds: DataService) {
      this.Grab = ds.getTaoGrabInfo();
      this.Sale = ds.getTaoSaleInfo();
      this.Products = ds.getTaoProducts();
    } 
    
  }