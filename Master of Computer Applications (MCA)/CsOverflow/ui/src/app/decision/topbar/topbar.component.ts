import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../authentication.service";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
    @Input() isAuthenticated = true;
    msgfromLeftpanel = "questions"
    constructor(private router : Router, private authService: AuthenticationService ) {}
  ngOnInit() {
  }

    onclickleftsidepanel(value: string){
        this.msgfromLeftpanel =value;
  }
    goTo(stringValue: string){
        if( stringValue == 'dashboard' ){
            this.router.navigate(['dashboard']);
        }
        if( stringValue == 'logout' ){
            this.router.navigate(['login']);
            this.authService.setAuthentication(false);
            this.isAuthenticated = false;
        }
    }
}
