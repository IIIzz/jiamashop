import { Component, Input } from "@angular/core"
import { NewProduct } from "../../../model/new.model"


@Component({
  selector : 'component-new-product',
  templateUrl: './product.component.html',
})

export class NewProductComponent {
  @Input() product : NewProduct;
}

