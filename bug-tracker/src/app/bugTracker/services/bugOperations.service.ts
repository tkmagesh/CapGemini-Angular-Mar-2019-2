import { Bug } from '../models/Bug';

export class BugOperationsService{
	createNew(bugName : string, isClosed : boolean = false, createdAt : Date = new Date()) : Bug{
		let newBug : Bug = {
			name : bugName,
			isClosed : isClosed,
			createdAt : createdAt
		};
		return newBug;
	}
	toggle(bug : Bug) : void {
		bug.isClosed = !bug.isClosed;
	}
}