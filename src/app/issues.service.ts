import { Injectable } from '@angular/core';
import { Issue } from './issues';
import { issues } from 'src/assets/mock-issues';

@Injectable({
  providedIn: 'root',
})
export class IssuesService {
  private issues: Issue[] = issues;

  constructor() {}

  getPendingIssues(): Issue[] {
    return this.issues.filter((issue) => !issue.completed);
  }

  createIssue(issue: Issue) {
    issue.issueNum = this.issues.length + 1;
    this.issues.push(issue);
  }


  completeIssue(issue: Issue){
    const selectIssue: Issue = {
      ...issue,
      completed: new Date()
    }

    const index = this.issues.findIndex(i => i === issue);
    this.issues[index] = selectIssue;
  }

  getSuggestions(title: string): Issue[]{
    if(title.length > 3 ){
      return this.issues.filter(issue => 
        issue.title.indexOf(title) !== -1);

    }
    return [];
  }


}
