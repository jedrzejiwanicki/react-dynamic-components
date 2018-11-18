export class Subject {
	constructor() {
		this.subscribers = [];
	}
	subscribe(subscriber) {
		this.subscribers = [...this.subscribers, subscriber]
	}

	next(data) {
		this.subscribers.forEach(subscriber => subscriber(data))
	}
}