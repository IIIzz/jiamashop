import { Component, Input, OnInit } from "@angular/core"

@Component({
  selector: 'component-tao-cross',
  templateUrl: './cross.component.html'
})

export class TaoCrossComponent {
  @Input() cross : Object;
  handledCrosses : object[];

  ngOnInit (){
    if (this.cross){
      const products = this.cross['products'];
      if (products.length >= 3) {
        this.handledCrosses = [];
        for (var i=0,count=products.length;i<count;i+=3){
          const array = [products[i]];
          if (products.length > i+1){
            array.push(products[i+1])
          }
          if (products.length > i+2){
            array.push(products[i+2])
          }
          this.handledCrosses.push(array);
        }
      }else{
        this.handledCrosses = [products]
      }
    }
  }

}