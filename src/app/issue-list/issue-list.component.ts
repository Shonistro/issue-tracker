import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../issues.service';
import { Issue } from '../issues';
 


@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})

export class IssueListComponent implements OnInit {
  issues: Issue[] = []
  showReportIssue = false;
  selectIssue: Issue | null = null;


  constructor(private issueService: IssuesService ){}
  ngOnInit(): void{
    this.getIssue();
 
  }

  private getIssue(){
    this.issues = 
  this.issueService.getPendingIssues();
 
  }

  onCloseReport(){
    this.showReportIssue = false;
    this.getIssue();
  }

  onConfirm(confirmed: boolean){
    if(confirmed && this.selectIssue ){
      this.issueService.completeIssue(this.selectIssue);
      this.getIssue();
    }

  }


}