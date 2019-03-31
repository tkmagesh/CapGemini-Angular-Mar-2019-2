import { Component } from '@angular/core';

import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';

@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	bugs : Bug[] = [];

	sortAttrName : string = 'name';
	sortDesc : boolean = false;

	constructor(private bugOperations : BugOperationsService){
		this.bugs.push(this.bugOperations.createNew('Server communication failure', false, new Date(2019,2,31,9,0,0)))
		this.bugs.push(this.bugOperations.createNew('User actions not recognized', true, new Date(2019,2,28,9,0,0)))
		this.bugs.push(this.bugOperations.createNew('Data integrity checks failed', false, new Date(2019,2,20,9,0,0)))
		this.bugs.push(this.bugOperations.createNew('Application not responding', true, new Date(2019,1,10,9,0,0)))
	}
	onNewBugCreated(newBug : Bug){
		this.bugs.push(newBug);
	}

	onBugNameClick(bug : Bug){
		this.bugOperations.toggle(bug);
	}

	onRemoveClosedClick(){
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

	
}