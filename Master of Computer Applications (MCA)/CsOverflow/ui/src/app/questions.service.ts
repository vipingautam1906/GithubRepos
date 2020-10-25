import { Injectable } from '@angular/core';
import {questionsData} from "./models";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
    constructor() { }
    private questionsList: questionsData[] = [
        new questionsData('What is 1 plus 1','this is type of addition questions','has no file currently!')
    ];

    getQuestion(){
        return this.questionsList;
    }

    addQuestion(question){
        this.questionsList.push(question);
    }


}
