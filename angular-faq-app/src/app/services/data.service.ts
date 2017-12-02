import { Injectable } from '@angular/core';
import { Question } from '../models/Question';
@Injectable()
export class DataService {
  questions:Question[];
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
        answer:'It is black-blue',
        hide: true
      },
      {
        text:'What is your favorite language?',
        answer:'It is Angular!!',
        hide: true
      },
    ];
  }

  getQuestions(){
    return this.questions;
  }

  addQuestion(question:Question){
    this.questions.unshift(question);
  }

}
