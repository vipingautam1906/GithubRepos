import {Component, Input, OnInit} from '@angular/core';
import {QuestionsService} from "../questions.service";
import {questionsData, User} from "../models";
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../user.service";


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  @Input() InputFromParent = "";
  questions: questionsData [];
  users: User [];
  formGroup: FormGroup;

  constructor(private questionsSer: QuestionsService, private userSer: UserService) { }

  ngOnInit() {
      this.questions = this.questionsSer.getQuestion();
      this.formGroup = new FormGroup({
          qCategory: new FormControl(),
          description: new FormControl(),
          path: new FormControl()
          });
      this.userSer.getAllUser().subscribe((r) => {
          this.users = r.map(e => new User(e) );
      });
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
