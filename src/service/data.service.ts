import { Injectable } from '@angular/core'

import { NewSubject1, NewSubject2, NewProducts } from '../mock/new.mock'
import { TaoGrabInfo, TaoSaleInfo, TaoProducts} from '../mock/tao.mock'

@Injectable()
export class DataService {

  //new
  getNewSubject1 (){ return NewSubject1;}
  getNewSubject2 (){ return NewSubject2;}
  getNewProducts (){ return NewProducts;}

  //Tao
  getTaoGrabInfo (){ return TaoGrabInfo;}
  getTaoSaleInfo (){ return TaoSaleInfo;}
  getTaoProducts (){ return TaoProducts;}

  
  

}