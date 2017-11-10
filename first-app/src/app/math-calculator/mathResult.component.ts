import { Component, Input } from '@angular/core';


@Component({

	selector : 'math-result',
	template : '<div [ngClass]="{result : true, positive : data >=0, negative : data < 0}">{{data}}</div>',
	styles : ['.positive { color : green }', '.negative { color : red }', '.result { font-size : 20pt }']

})
export class MathResultComponent{

	@Input()
	data : number = 0;

}