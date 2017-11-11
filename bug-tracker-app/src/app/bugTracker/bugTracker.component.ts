import { Component } from '@angular/core';
import { IBug } from './models/IBug';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	bugs : IBug[] = [];
	bugName : string = '';

	private loadBugs(){
		this.bugs.push({ name : 'Server communication failure', isClosed : false});
		this.bugs.push({ name : 'User actions not recognized', isClosed : false});
		this.bugs.push({ name : 'Application not responding', isClosed : true});
		this.bugs.push({ name : 'Data integrity checks failed', isClosed : true});
		this.bugs.push({ name : 'Authorization checks not stable', isClosed : false});
	}

	constructor(){
		this.loadBugs();
	}

	addNew() : void {
		let newBug : IBug = {
			name : this.bugName,
			isClosed : false
		};
		//this.bugs.push(newBug);
		this.bugs = [...this.bugs, newBug];
	}

	toggle(bugToToggle : IBug) : void {
		let toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
		this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug);
	}

	private isOpen(bug){
		return !bug.isClosed;
	}

	removeClosed() : void {
		this.bugs = this.bugs.filter(this.isOpen);
	}

	
}