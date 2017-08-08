import React, { Component } from 'react'

class Counter extends Component {

	constructor(props) {
		super(props);
		this.state = {
			count: 0
		}
		this.incrementCount = this.incrementCount.bind(this);
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.count == 34 && this.state.count == 35)
			this.props.handleWarning();
	}

	incrementCount() {
		this.setState((prevState, props) => {
			return { count: prevState.count + 1 }
		})
	}

	render() {
		var alertClass = "";
		var shakeClass = "";

		if (this.state.count >= 10) {
			alertClass = "alert alert-warning";
			shakeClass = "shake-constant shake-little";
		}
		if (this.state.count >= 20) {
			alertClass = "alert alert-danger";
			shakeClass = "shake-constant shake";
		}
		if (this.state.count >= 30) {
			shakeClass = "shake-constant shake-hard";
		}

		return (
			<div id="counter" className={alertClass + " " + shakeClass} >
				<h2 id="counter-label">{this.state.count}</h2>
				<button id="counter-btn"
					onClick={this.incrementCount}>+1</button>
			</div>
		)
	}


}

export default Counter