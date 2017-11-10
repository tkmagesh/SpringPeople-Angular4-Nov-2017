import { Component } from '@angular/core';
import { MathCalculatorModel } from './MathCalculatorModel';

@Component({
	selector : 'math-calculator-2',
	templateUrl : 'mathCalculator2.component.html'
})
export class MathCalculator2Component{

	model : MathCalculatorModel = null;
		
	operator : string = '';

	constructor(){
		this.model = new MathCalculatorModel();


	}
	
	
	
}