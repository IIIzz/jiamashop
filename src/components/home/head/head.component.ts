import { Component } from '@angular/core';

@Component({
  selector: 'component-home-head',
  templateUrl: 'head.component.html'
})
export class HomeHeadComponent {

  text: string;

  constructor() {
    console.log('Hello HomeHeadComponent Component');
    this.text = 'Hello World';
  }

}
