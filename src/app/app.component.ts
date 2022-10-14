import {Component, OnInit} from '@angular/core';
import {MyButtonConfig} from "./my-button-config";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  myConfig: MyButtonConfig = new MyButtonConfig();
  title = 'noleggio-auto-angular';

  constructor() {

  }

  ngOnInit() {

  }


}
