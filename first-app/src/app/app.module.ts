import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorService } from './calculator/calculatorService';

@NgModule({
  declarations: [
    AppComponent
    , GreeterComponent
    , CalculatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  	CalculatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
