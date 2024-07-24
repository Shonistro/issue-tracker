import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators} from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { IssuesService } from '../issues.service';
import { Issue } from '../issues';


interface IssueForm {
  title: FormControl<string>;
  description: FormControl<string>;
  priority: FormControl<string>;
  type: FormControl<string>;
  }

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.css']
})
export class IssueReportComponent implements OnInit {
  @Output() formClose = new EventEmitter();
  suggestions: Issue[] = [];


  issueForm = new FormGroup<IssueForm>({
    title: new FormControl('', {nonNullable: true, validators: Validators.required}),
    description: new FormControl('', {
      nonNullable: true,
       validators: [Validators.required, Validators.minLength(4)]
      }),
    priority: new FormControl('', {nonNullable: true,validators: Validators.required}),
    type: new FormControl('', {nonNullable: true,validators: Validators.required})
  })

  constructor(private issueService: IssuesService){}
  ngOnInit(): void {
    this.issueForm.controls.title.valueChanges.subscribe(title => {
      this.suggestions = this.issueService.getSuggestions(title);
    })
    
  }

  addIssues(){
    if(this.issueForm && this.issueForm.invalid){
    this.issueForm.markAllAsTouched(); 
    return
    
    }
    this.issueService.createIssue(this.issueForm.getRawValue() as Issue);
  this.formClose.emit()
  }



   




}
