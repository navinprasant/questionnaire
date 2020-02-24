import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { BarChartComponent } from 'angular-d3-charts';
import { QuestionsComponent } from './questions/questions.component'; // this is needed!


@NgModule({
  declarations: [
    AppComponent,
    // BarChartComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
