import { Component, EventEmitter, Input, Output } from '@angular/core';



@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {

  @Input() issueNum: number  | null = null;
  @Output() confirm = new EventEmitter<boolean>();



  agree(){
    this.confirm.emit(true);
    this.issueNum = null;
  }

  disagree(){
    this.confirm.emit(false);
    this.issueNum = null;
  }

  

  checkNum(){



  }
}
