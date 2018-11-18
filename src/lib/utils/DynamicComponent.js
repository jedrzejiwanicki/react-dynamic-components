import React from 'react';

import { ModalSubject } from './ModalSubject';
import { Subject } from './Subject';

export class DynamicComponent {
	afterClosedSubject = new Subject();
	onOpenedSubject = new Subject();

	constructor(component, props) {
		this._component = component;
		this._props = props;
		this._index = ModalSubject.getIndex();
	}

	get index() {
		return this._index;
	}

	get props() {
		return this._props;
	}

	get component() {
		const {_component: Component } = this;

		return <Component
			{...this.props}
			close={this.close}
			index={this.index}
			key={this.index}
		/>
	}

	close = (data) => {
		this.afterClosedSubject.next(data);
		ModalSubject.unregister(this.index);
	}

	show() {
		ModalSubject.register(this.component, this.index);
		this.onOpenedSubject.next();

		return this;
	}

	onOpen() {
		return this.onOpenedSubject;
	}

	afterClosed() {
		return this.afterClosedSubject;
	}
}
