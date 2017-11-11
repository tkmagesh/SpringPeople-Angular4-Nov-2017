import { Component } from '@angular/core';
import { IBug } from './models/IBug';
import { BugOperationsService } from './services/bugOperations.service';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	bugs : IBug[] = [];
	bugName : string = '';

	//private bugOperations : BugOperationsService = null;

	private loadBugs(){
		this.bugs.push({ name : 'Server communication failure', isClosed : false});
		this.bugs.push({ name : 'User actions not recognized', isClosed : false});
		this.bugs.push({ name : 'Application not responding', isClosed : true});
		this.bugs.push({ name : 'Data integrity checks failed', isClosed : true});
		this.bugs.push({ name : 'Authorization checks not stable', isClosed : false});
	}

	constructor(private bugOperations : BugOperationsService){
		//this.bugOperations = bugOperations;
		this.loadBugs();
	}

	addNew() : void {
		let newBug : IBug = this.bugOperations.createNew(this.bugName);
		//this.bugs.push(newBug);
		this.bugs = [...this.bugs, newBug];
	}

	toggle(bugToToggle : IBug) : void {
		let toggledBug = this.bugOperations.toggle(bugToToggle);
		this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug);
	}

	private isOpen(bug){
		return !bug.isClosed;
	}

	removeClosed() : void {
		this.bugs = this.bugs.filter(this.isOpen);
	}

	
}