import { Component, OnInit } from '@angular/core';
import { IBug } from './models/IBug';
import { BugStorageService } from './services/bugStorage.service';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit{
	bugs : IBug[] = [];
	

	//private bugOperations : BugOperationsService = null;

	/*private loadBugs(){
		this.bugs.push({ name : 'Server communication failure', isClosed : false});
		this.bugs.push({ name : 'User actions not recognized', isClosed : false});
		this.bugs.push({ name : 'Application not responding', isClosed : true});
		this.bugs.push({ name : 'Data integrity checks failed', isClosed : true});
		this.bugs.push({ name : 'Authorization checks not stable', isClosed : false});
	}*/

	constructor(private bugStorage : BugStorageService){
		//this.bugOperations = bugOperations;
		//this.loadBugs();
	}

	ngOnInit(){
		this.bugs = this.bugStorage.getAll();
	}

	onNewBugCreated(newBug : IBug){
		this.bugs = [...this.bugs, newBug];
	}

	toggle(bugToToggle : IBug) : void {
		let toggledBug = this.bugStorage.toggle(bugToToggle);
		this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug);
	}

	private isOpen(bug){
		return !bug.isClosed;
	}

	removeClosed() : void {
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(bug => this.bugStorage.remove(bug));
		this.bugs = this.bugs.filter(this.isOpen);
	}

	
}