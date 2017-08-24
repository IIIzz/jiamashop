import { Component, Input } from "@angular/core"
import { NewSubject } from '../../../model/new.model'


@Component({
  selector: 'component-new-subject',
  templateUrl: './subject.component.html'
})

export class NewSubjectComponent {
  @Input() subject: NewSubject;
  @Input() isCircle: boolean;
  constructor() {
  }
}

