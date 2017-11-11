import { Component, OnInit } from '@angular/core';
import { IBug } from './models/IBug';
import { BugServerService } from './services/bugServer.serivce';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit{
	bugs : IBug[] = [];
	


	constructor(private bugServer : BugServerService){

	}

	ngOnInit(){
		this.bugServer
			.getAll()
			.subscribe(bugs => this.bugs = bugs);

		//this.bugs = this.bugStorage.getAll();
	}

	onNewBugCreated(newBug : IBug){
		this.bugs = [...this.bugs, newBug];
	}

	toggle(bugToToggle : IBug) : void {
		this.bugServer
			.toggle(bugToToggle)
			.subscribe(result => this.bugs = this.bugs.map(bug => bug.id === result.id ? result : bug));
	}

	private isOpen(bug){
		return !bug.isClosed;
	}

	removeClosed() : void {
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach((bug, index) => 
				this.bugServer
					.remove(bug)
					.subscribe(_ => this.bugs.splice(this.bugs.indexOf(bug), 1)));
	}

	
}