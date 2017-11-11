import { Component } from '@angular/core';
import { IBug } from './models/IBug';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	bugs : IBug[] = [];

	addNew(bugName : string){
		let newBug : IBug = {
			name : bugName,
			isClosed : false
		};
		this.bugs.push(newBug);
	}

	toggle(bug : IBug){
		bug.isClosed = !bug.isClosed;
	}

	private isOpen(bug){
		return !bug.isClosed;
	}

	removeClosed(){
		this.bugs = this.bugs.filter(this.isOpen);
	}

	getClosedCount(){
		return this.bugs.reduce((prevResult, bug) => bug.isClosed ? ++prevResult : prevResult, 0)
	}

}