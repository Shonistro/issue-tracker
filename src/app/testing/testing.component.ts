import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent {

  @Output() whatNum = new EventEmitter<boolean>()

  numbers  = [1,2,3]
}
