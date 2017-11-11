import { BugOperationsService } from './bugOperations.service';
import { IBug } from '../models/IBug';
import { Injectable } from '@angular/core';

@Injectable()
export class BugStorageService{

	private storage = window.localStorage;
	private currentBugId = 0;

	constructor(private bugOperations : BugOperationsService){

	}
	private save(bug : IBug ){
		this.storage.setItem(bug.id.toString(), JSON.stringify(bug));
	}
	addNew(bugName : string) : IBug {
		let newBug = this.bugOperations.createNew(++this.currentBugId, bugName);
		this.save(newBug);
		return newBug;
	}
	toggle(bugToToggle : IBug) : IBug {
		let toggledBug = this.bugOperations.toggle(bugToToggle);
		this.save(toggledBug);
		return toggledBug;
	}
	remove(bug : IBug) : void{
		this.storage.removeItem(bug.id.toString());
	}
	getAll() : IBug[]{
		let result : IBug[] = [];
		for(let index = 0, count = this.storage.length; index < count; index++){
			let key = this.storage.key(index),
				data = this.storage.getItem(key),
				bug = JSON.parse(data);
			result.push(bug);
			this.currentBugId = this.currentBugId > bug.id ? this.currentBugId : bug.id;
		}
		return result;
	}
}