import { Component, Output, EventEmitter } from '@angular/core';
import { BugServerService } from '../services/bugServer.serivce';
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

	constructor(private bugServer : BugServerService){

	}
	addNew() : void {
		this.bugServer
			.addNew(this.bugName)
			.subscribe(newBug => this.newBugEvt.emit(newBug));
	}
}