import React from 'react';

import { ModalSubject } from './ModalSubject';
import { Subject } from './Subject';

export class DynamicComponent {
	afterClosedSubject = new Subject();
	onOpenedSubject = new Subject();

	constructor(component, props, index) {
		this._component = component;
		this._props = props;
		this._index = index;
	}

	get index() {
		return  this._index;
	}

	get component() {
		const { _component: Component } = this;

		return <Component {...this._props} close={(data) => this.close(data)} />
	}

	close(data) {
		this.afterClosedSubject.next(data);
		ModalSubject.unregister(this.index);
	}

	show() {
		
		return this.onOpen();
	}

	onOpen() {
		this.onOpenedSubject.next();

		return this.onOpenedSubject;
	}

	afterClosed() {
		return this.afterClosedSubject;
	}
}