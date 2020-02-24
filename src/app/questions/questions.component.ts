import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Chart } from 'chart.js';


declare const getAllQuestion: any;
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions = [];
  selectedOptions = [];
  formSubmitted: boolean = false;
  wrongAnswer = [];
  // highLighWrongAnswer = false;
  highLighIncorrectAnswer: boolean = false;
  selectedValue = [];
  barChart = [];
  showChart:boolean = false;

  // public colors = ['red', 'green', 'blue']
  // public  dataColumns = [1]; // Single Bar Chart
  // public  dataColumns = [3]; // Stacked Bar Chart
  // public  dataColumns = [2, 1]; // Multi Stacked Bar Chart

  // colors = ['red']
  // dataColumns = [1]; // Single Bar Chart

  // public  barChartData = [{
  //     id: 0,
  //     label: 'Correct',
  //     value1: 3,

  //  },{
  //     id: 1,
  //     label: 'Incorrect',
  //     value1: 4,
  //  }]

   correctAnswerData = [];
   incorrectAnsweData = [];
   correctAnswerCount = 0;
   incorrectAnswerCount = 0;
  chartData = [];
  showMissingErrorMessage: boolean;

  constructor() { }

  ngOnInit() {
    this.questions = getAllQuestion();    
    // for(let i = 0; i< this.questions.length; i++) {
    //   console.log(this.questions[i].question, "question");
    //   console.log(this.questions[i].options, "options");
    //   console.log(this.questions[i].ans, "Answer");
    // }
    this.selectedOptions.length = this.questions.length;
  }

  submitForm() {
    this.showMissingErrorMessage = false;
    this.correctAnswerCount = 0;
    this.incorrectAnswerCount = 0;
    this.formSubmitted = true;
    this.wrongAnswer = [];
    this.chartData = [];
    for (let i = 0; i < this.selectedOptions.length; i++) {
      if (this.selectedOptions[i]) {
        if (this.questions[i].ans == this.selectedOptions[i]) {
          console.log('selected answer', this.selectedOptions[i])
          this.wrongAnswer.push(false);
          this.correctAnswerCount++;
        }
        else {
          console.log('selected answer false', this.selectedOptions[i])
          this.wrongAnswer.push(true);
          this.incorrectAnswerCount++;
        }
      } else {
        this.wrongAnswer = [];
        this.showMissingErrorMessage = true;
        break;
      }
      if (i == this.selectedOptions.length - 1) {
        this.highLighIncorrectAnswer = true;
        this.correctAnswerData = [];
        this.incorrectAnsweData = [];
        this.chartData.push(this.correctAnswerCount,this.incorrectAnswerCount, 0, this.questions.length)
        // this.correctAnswerData.push(this.correctAnswerCount,0);
        // this.incorrectAnsweData.push(0,this.incorrectAnswerCount, this.questions.length);
        this.showBarChart();
      }
    }
  }

  showBarChart() {
    console.log('show bar Chart method');
    this.showChart = true;
    this.barChart = new Chart('barchart',{
      type:'bar',
      data:  {
        datasets: [{
            data: this.chartData,
            backgroundColor:["#00FF00","#FF0000",],
            borderWidth: 0
        }],
        labels: ['correct', 'incorrect']
    },
    //   data: {
    //     labels:['correct','incorrect'],
    //    datasets: [
    //      {
    //          label: 'Correct Answer',
    //          backgroundColor: ['green','red'],
    //          borderColor: ['green','blue'],
    //          data:[1,2,4]
    //         //  data: this.correctAnswerData
    //      },
    //     //  {
    //     //      label: 'Incorrect Answer',
    //     //      backgroundColor: 'red',
    //     //      borderColor: 'red',
    //     //      data: this.incorrectAnsweData
    //     //  }
    //  ]
    //   },

      options: {
        legend: {
            display: false
        },
        tooltips: {
            enabled: false
        },

        scales: {
          xAxes: [{
              ticks: {
                  mirror: true
              }
          }]
        }
    }
     })
  }

  resetForm(questionsForm: NgForm) {
    // questionsForm.reset();
    this.showMissingErrorMessage = false;
    this.showChart = false;
    this.selectedOptions = [];
    this.formSubmitted = false;
    this.wrongAnswer = [];
    // highLighWrongAnswer = false;
    this.highLighIncorrectAnswer = false;
    this.selectedValue = [];
    // this.barChart.clear();
    this.barChart = [];
    this.selectedOptions.length = this.questions.length;

  }

}
