import { Component } from '@angular/core'
import { NavController } from 'ionic-angular';
import { NewSubject, NewProduct } from '../../model/new.model'
import { DataService } from '../../service/data.service'

@Component({
  selector: 'page-new',
  templateUrl: 'new.html'
})

export class NewPage {
  Subject1: NewSubject;
  Subject2: NewSubject;
  Products: NewProduct[];

  constructor(public navCtrl: NavController, ds: DataService) {
    this.Subject1 = ds.getNewSubject1();
    this.Subject2 = ds.getNewSubject2();
    this.Products = ds.getNewProducts();
  }

}