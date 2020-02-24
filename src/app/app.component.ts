import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { NgForm } from '@angular/forms';

// declare const getAllQuestions: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'questionnarie';

  ngOnInit() {
  }

  // saveSelectValue(index, value) {
  //   console.log("index is", index, "value", value);
  //   this.selectedValue[index] = value;
  // }

}
