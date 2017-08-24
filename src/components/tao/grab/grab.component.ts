import { Component, Input } from '@angular/core'
import { TaoGrab } from '../../../model/tao.model'

@Component({
  selector : 'component-tao-grab',
  templateUrl: './grab.component.html'
})

export class TaoGrabComponent {
  @Input() grab : TaoGrab;


}