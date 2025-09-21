import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ifelse';
  flag:boolean =true;
  flag2:boolean=true;
  arr  = [10,20,30,40];
  cities = ["Mumbai", "Hyderabd", "Pune", "Chennai"];
  txtCity : string = "";
}
