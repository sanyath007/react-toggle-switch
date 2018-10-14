import React, { Component } from 'react'

class Hello extends Component {
	constructor (props) {
		super(props)

		this.state = {
			counter: 0
		}

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick () {
		this.setState((prevState) => {
			return {
				counter: prevState.counter + 1
			}
		})
	}

	render () {
		return (
			<React.Fragment>
				<h1>{ this.props.message }</h1>
				<button onClick={ this.handleClick }>Click me</button>
				<p>Total click : { this.state.counter }</p>
			</React.Fragment>
		)
	}
}

export default Hello