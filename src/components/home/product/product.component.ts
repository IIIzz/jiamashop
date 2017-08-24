/**
 * Created by hukeping on 2017/8/15.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'component-home-product',
  templateUrl: 'product.component.html'
})
export class HomeProductComponent {

  text: string;

  constructor() {
    console.log('Hello HomeProductComponent Component');
    this.text = 'Hello World';
  }

}
