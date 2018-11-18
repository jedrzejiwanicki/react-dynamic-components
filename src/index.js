import React, { Component } from "react";
import ReactDOM from "react-dom";

import { ModalProvider, ModalOutlet } from "./lib/api";

function ModalConfirm({ close, title, description }) {
	return (
		<div>
			<h1>{title}</h1>
			<p>{description}</p>
			<button onClick={() => close({ confirmed: false })}>cancel</button>
			<button onClick={() => close({ confirmed: true })}>confirm</button>
		</div>
	)
}

class App extends Component {
	showModalConfirm = () => {
		const modalProps = { title: 'Confirm', description: 'Are you sure you want to do that?' }

		ModalProvider.show(ModalConfirm, modalProps)
			.afterClosed()
			.subscribe(({ confirmed }) => console.log(confirmed))
	}


	render() {

		return (
			<div>
				<button onClick={this.showModalConfirm}>show modal confirm</button>
				<div>Hello World!</div>
				<ModalOutlet root="root" />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));