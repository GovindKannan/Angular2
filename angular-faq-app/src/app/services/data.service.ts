import { Injectable } from '@angular/core';
import { Question } from '../models/Question';
@Injectable()
export class DataService {
  questions:Question[];
  constructor() { 
    /*
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
    */
  }

  getQuestions(){
    if(localStorage.getItem('questions')===null){
      this.questions=[];
    }else{
      this.questions=JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }

  addQuestion(question:Question){
    if(localStorage.getItem('questions')===null){
      this.questions=[];
    }else{
      this.questions=JSON.parse(localStorage.getItem('questions'));
    }
    this.questions.unshift(question);
    //save to local storage
    localStorage.setItem('questions', JSON.stringify(this.questions));
    return this.questions;
  }

  removeQuestion(question:Question){
    for(let i=0;i<=this.questions.length; i++){
      if(question==this.questions[i]){
        this.questions.splice(i , 1);
      }
    }
    localStorage.setItem('questions', JSON.stringify(this.questions));
  }

}
