import { Component } from '@angular/core';

@Component({
	selector : 'app-greeter',
	templateUrl : 'greeter.component.html',
	styleUrls : ['greeter.component.css']
})
export class GreeterComponent{
	message : string = '[Default greet message]';

	greet(username : string){
		//let username = prompt('Enter your name :');
		this.message = `Hi ${username}, Welcome to Angular!!`;
	}
}