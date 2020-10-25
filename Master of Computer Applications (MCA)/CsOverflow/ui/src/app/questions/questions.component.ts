import {Component, Input, OnInit} from '@angular/core';
import {QuestionsService} from "../questions.service";
import {questionsData} from "../models";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  @Input() InputFromParent = "";
  questions: questionsData [];
  formGroup: FormGroup;

  constructor(private questionsSer: QuestionsService) { }

  ngOnInit() {
      this.questions = this.questionsSer.getQuestion();
      this.formGroup = new FormGroup({
          qCategory: new FormControl(),
          description: new FormControl(),
          path: new FormControl()
          }
      );

  }

  onAddQuestion( receivedQuestion: string ){
      const name = this.formGroup.get('qCategory').value;
      const des = this.formGroup.get('description').value;
      const filePath = this.formGroup.get('path').value;
      console.log(name);
      console.log(des);
      console.log(filePath);
      const question = new questionsData(name,des,filePath);
      this.questionsSer.addQuestion(question);
  }

}
