import { Component } from '@angular/core';

@Component({
	selector : 'lister',
	template : `
		<input type="text" #txtItemName />
		<input type="button" value="Add New" (click)="add(txtItemName.value)"/>
		<ol>
			<li *ngFor="let item of data">{{item}}</li>
		</ol>
	`

})
export class ListerComponent{
	data = ['Pen', 'Pencil', 'Marker'];

	add(item){
		this.data.push(item);
	}
}