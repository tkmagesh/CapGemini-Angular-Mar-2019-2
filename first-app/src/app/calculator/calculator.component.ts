import { Component } from '@angular/core';
import { CalculatorService } from './calculatorService';

@Component({
	selector : 'app-calculator',
	templateUrl : 'calculator.component.html',
	styleUrls : ['calculator.component.css']
})
export class CalculatorComponent{
	result : number = 0;

	n1 : number = 0;
	n2 : number = 0;

	constructor(public calcSvc : CalculatorService){
		
	}

	onAddClick(){
		this.result = this.calcSvc.add(this.n1, this.n2);
	}
	onSubtractClick(){
		this.result = this.calcSvc.subtract(this.n1, this.n2);
	}
	onMultiplyClick(){
		this.result = this.calcSvc.multiply(this.n1, this.n2);
	}
	onDivideClick(){
		this.result = this.calcSvc.divide(this.n1, this.n2);
	}
}