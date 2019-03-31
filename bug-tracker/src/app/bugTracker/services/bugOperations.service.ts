import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';
import { BugApiService } from './bugApi.service';

import { Observable } from 'rxjs';

@Injectable()
export class BugOperationsService{

	public dummyData : string = '';
	
	constructor(private bugApi : BugApiService){

	}

	getAll(){
		return this.bugApi.getAll();
	}

	createNew(bugName : string, isClosed : boolean = false, createdAt : Date = new Date()) : Observable<Bug>{
		let newBugData : Bug = {
			id : 0,
			name : bugName,
			isClosed : isClosed,
			createdAt : createdAt
		};
		return this.bugApi.save(newBugData);
	}
	toggle(bug : Bug) : Observable<Bug> {
		bug.isClosed = !bug.isClosed;
		return this.bugApi.save(bug);
	}

	remove(bug : Bug) : Observable<any>{
		return this.bugApi.remove(bug);
	}
}