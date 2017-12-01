import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions: Object[];
  constructor() { 
    this.questions=[
      { 
        text:'What is your name?',
        answer:'My Name is Kannan',
        hide: true

      },
      { 
        text:'Who is your wife?',
        answer:'Her name is Arathi',
        hide: true
      },
      {
        text:'What is your favorite color?',
        answer:'It is black',
        hide: true
      },
      {
        text:'What is your favorite language?',
        answer:'It is Angular!!',
        hide: true
      },
    ];
  }

  ngOnInit() {
  }

}
