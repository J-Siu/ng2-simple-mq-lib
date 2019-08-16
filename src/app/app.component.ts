import { Component } from '@angular/core';
import { SimpleMQ } from 'ng2-simple-mq';
import { UUID } from 'angular2-uuid';

@Component({
	'selector': 'app-root',
	'template': `
		<h3>{{title}}</h3>
		<div>Send message to component one <input [(ngModel)]="msgOne"><button (click)="sendToOne()">Send</button></div>
		<div>Send message to component two <input [(ngModel)]="msgTwo"><button (click)="sendToTwo()">Send</button></div>
		<div>Broadcast message <input [(ngModel)]="msgBroadcast"><button (click)="broadcast()">Broadcast</button></div>
		<one-component [parent]="myId"></one-component>
		<two-component [parent]="myId"></two-component>
		`
})
export class AppComponent {
	title = 'Angular2 Simple Component MQ Example';
	msgOne: string;
	msgTwo: string;
	msgBroadcast: string;

	myId = UUID.UUID();

	constructor(private smq: SimpleMQ) { }

	sendToOne() {
		// Publish to queue name 'one'
		this.smq.publish('one', this.msgOne);
	}
	sendToTwo() {
		// Publish to queue name 'two'
		this.smq.publish('two', this.msgTwo);
	}
	broadcast() {
		// Publish to queue name 'broadcast'
		this.smq.publish(this.myId, this.msgBroadcast);
	}
}
