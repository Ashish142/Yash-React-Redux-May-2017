import React, {Component } from 'react';
import Increment from './Increment';
import Decrement from './Decrement';
import spinnerActionCreator from './actions';

import { connect } from 'react-redux';

class Spinner extends Component{
	render(){
		return (
			<div>
				<Increment trigger={this.props.increment}></Increment>
				<span>{this.props.value}</span>
				<Decrement trigger={this.props.decrement}></Decrement>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		value : state.spinner
	};
}
/*
function mapDispatchToProps(dispatch){
	return spinnerActionCreator(dispatch)
}*/

export default connect(mapStateToProps, spinnerActionCreator)(Spinner);

