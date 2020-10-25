import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    editprofileclicked = false;
  constructor() { }

  ngOnInit() {
  }
    onselecteditprofile(edit:string){
    this.editprofileclicked = true;
    }
}
