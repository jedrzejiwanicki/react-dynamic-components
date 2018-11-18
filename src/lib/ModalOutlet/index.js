import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import { ModalSubject } from '../utils/ModalSubject';

export class ModalOutlet extends Component {
	state = { modals: [] };

	componentDidMount() {
		ModalSubject.subscribe(modals => this.appendModals(modals))
	}

	get modals() {
		return this.state.modals.map(instance => instance.component)
	}

	get rootElement() {
		const { root } = this.props;

		return document.getElementById(root || 'root');
	}

	appendModals = (modals) => {
		this.setState({ modals })
	}

	render() {

		console.log(this.modals)
		return (
			ReactDOM.createPortal(
				<Fragment>
					{this.modals}
				</Fragment>,
				this.rootElement,
			)
		)
	}
}