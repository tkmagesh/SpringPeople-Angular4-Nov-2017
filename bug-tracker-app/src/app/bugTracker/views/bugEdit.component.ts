import { Component, Output, EventEmitter } from '@angular/core';
import { BugStorageService } from '../services/bugStorage.service';
import { IBug } from '../models/IBug';

@Component({
	selector : 'bug-edit',
	template : `
		<section class="edit">
			<label for="">Bug Name :</label>
			<input type="text" [(ngModel)]="bugName">
			<input type="button" value="Create" (click)="addNew()">
		</section>
	`
})
export class BugEditComponent{
	bugName : string = '';

	@Output()
	newBugEvt : EventEmitter<IBug> = new EventEmitter<IBug>();

	constructor(private bugStorage : BugStorageService){

	}
	addNew() : void {
		let bug : IBug = this.bugStorage.addNew(this.bugName);
		//this.bugs.push(newBug);
		//this.bugs = [...this.bugs, newBug];
		this.newBugEvt.emit(bug);
	}
}