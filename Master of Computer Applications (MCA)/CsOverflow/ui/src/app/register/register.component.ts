import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
  constructor() { }

  ngOnInit() {
      this.registerForm = new FormGroup( {
          email: new FormControl(''),
          password: new FormControl('')
      });
  }

}
