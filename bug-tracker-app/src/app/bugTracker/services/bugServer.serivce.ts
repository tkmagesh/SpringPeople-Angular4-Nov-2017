import { BugOperationsService } from './bugOperations.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IBug } from '../models/IBug';
import { Injectable } from '@angular/core';


@Injectable()
export class BugServerService{
	constructor(private http : Http, private bugOperations : BugOperationsService){

	}
	getAll() : Observable<IBug[]>{
		return this.http
			.get('http://localhost:3000/bugs')
			.map(response => response.json());
	}

	toggle(bugToToggle) : Observable<IBug>{
		let toggledBug = this.bugOperations.toggle(bugToToggle);
		return this.http
			.put(`http://localhost:3000/bugs/${toggledBug.id}`, toggledBug)
			.map(response => response.json());
	}

	addNew(bugName : string) : Observable<IBug>{
		let newBugData = this.bugOperations.createNew(0, bugName);
		return this.http
			.post(`http://localhost:3000/bugs`, newBugData)
			.map(response => response.json());
	}
	remove(bug) : Observable<any>{
		return this.http
			.delete(`http://localhost:3000/bugs/${bug.id}`)
			.map(response => response.json());
	}
}

