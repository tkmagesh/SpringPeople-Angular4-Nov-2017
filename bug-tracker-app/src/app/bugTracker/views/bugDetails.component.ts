import { Component, OnInit } from '@angular/core';
import { BugServerService } from '../services/bugServer.serivce';
import { IBug } from '../models/IBug';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector : 'bug-details',
	template : `
		<h3>Bug Details</h3>
		<hr>
		<p>{{bug.name}}</p>
	`
})
export class BugDetailsComponent implements OnInit{
	bug : IBug = null;
	constructor( private route: ActivatedRoute, private bugServer : BugServerService){
        
    }

    ngOnInit(){
      
      this.route.params.map((p:any) => p.id).subscribe(id => this.bugServer.get(id).subscribe(bug => this.bug = bug));
    }
	
}