
import { Component, Input } from '@angular/core'

@Component({
  selector : 'component-tao-product',
  templateUrl : './product.component.html'
})

export class TaoProductComponent {
  @Input() Product : Object;
}