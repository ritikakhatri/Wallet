import React, {Component } from "react";
import {connect} from 'react-redux'

class Balance extends Component {
	render() {
		return (
			<div className="balance">{`£${this.props.balance}`}</div>
		)
	}
}

const mapStatetoProps  =(state) =>{
	return {
		balance: state.balance
	}
}
export default connect (mapStatetoProps)(Balance)