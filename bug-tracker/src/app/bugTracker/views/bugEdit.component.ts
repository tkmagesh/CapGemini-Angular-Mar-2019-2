import { Component, EventEmitter, Output } from '@angular/core';
import { BugOperationsService } from '../services/bugOperations.service';

import { Bug } from '../models/Bug';

@Component({
	selector : 'app-bug-edit',
	template : `
		<section class="edit">
			<label for="">Bug Name :</label>
			<input type="text" #txtBugName>
			<input type="button" value="Add New" (click)="onAddNewClick(txtBugName.value)">
		</section>
	`,
})
export class BugEditComponent{

	@Output()
	bugCreated : EventEmitter<Bug> = new EventEmitter<Bug>();

	constructor(private bugOperations : BugOperationsService){

	}
	onAddNewClick(bugName : string){
		this.bugOperations
			.createNew(bugName)
			.subscribe(newBug => this.bugCreated.emit(newBug));
		//this.bugs.push(newBug);
		
	}
}