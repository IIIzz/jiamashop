import { Component } from '@angular/core';

/**
 * Generated class for the EntityComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'component-home-entity',
  templateUrl: 'entity.component.html'
})
export class HomeEntityComponent {

  text: string;

  constructor() {
    console.log('Hello EntityComponent Component');
    this.text = 'Hello World';
  }

}
