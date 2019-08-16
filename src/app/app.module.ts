import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SimpleMQ } from 'ng2-simple-mq';

import { AppComponent } from './app.component';

import { OneComponent } from './one.component';
import { TwoComponent } from './two.component';

@NgModule({
	declarations: [
		AppComponent,
		OneComponent,
		TwoComponent
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [SimpleMQ],
	bootstrap: [AppComponent]
})
export class AppModule { }
