import React, { Component } from 'react';
import Counter from './Counter';

class App extends Component {

	alertMessage() {
		alert("STOP THE MACHINE LEARNING");
	}

	render() {
		return (
			<div className="text-center">
				<h1>Machine Learning Counter</h1>
				<Counter handleWarning={this.alertMessage} maxCount="37"/>
			</div>
		)

	}


}

export default App