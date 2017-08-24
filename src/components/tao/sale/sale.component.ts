import { Component, Input } from '@angular/core'
import { TaoSale } from '../../../model/tao.model'

@Component({
  selector : 'component-tao-sale',
  templateUrl: './sale.component.html'
})

export class TaoSaleComponent {
  @Input() sale : TaoSale;


}