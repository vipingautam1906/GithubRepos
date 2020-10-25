import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import {AuthenticationService} from "../authentication.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

  error: string="";
  constructor( private router: Router, private authService: AuthenticationService) {
  }

  ngOnInit() {
      this.loginForm = new FormGroup( {
          email: new FormControl(''),
          password: new FormControl('')
      });
  }

    onselect(url: string)
    {
        if( 'x@gmail.com' === this.loginForm.get('email').value && '123' === this.loginForm.get('password').value )
        {
            this.authService.setAuthentication(true);
            this.router.navigate([url]);

        }
        else {
            this.error = 'Invalid email or password';
        }
    }

}
