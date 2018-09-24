import React, { Component } from "react";
import { connect } from "react-redux";

import { add_balance, reduce_balance, thunk_action_creator } from "./js/actions/fetchActions";

import Balance from './Components/Balance';
import Warning from './Components/Warning';

import './App.css';
import { Button, Grid, Row, Col} from 'react-bootstrap';

class App extends Component {
     constructor(props) {
	    super(props);
	    this.handleAdd = this.handleAdd.bind(this);
	    this.handleReduce = this.handleReduce.bind(this);
}
     componentDidMount() {
  	  this.props.dispatch(thunk_action_creator());
     }
     handleAdd() {
  	  this.props.dispatch(add_balance({
               data: this.props.data.balance
       }))
     }
     handleReduce() {
  	  this.props.dispatch(reduce_balance({
               data: this.props.data.balance
       }))
     }

     render() {

     return (
      <Grid className="parent">
      	<Row className="show-grid">
               <Col xs={12} align="center">
                         <Warning />
               </Col>
          	<Col xs={12} align="center">
          		<div className="balance"><Balance /></div>
          		<Button onClick={this.handleAdd} bsStyle="primary" bsSize="large" className="add">+</Button>
          		<Button onClick={this.handleReduce} bsStyle="primary" bsSize="large" className="reduce">-</Button>
          	</Col>
          </Row>
      </Grid>
    );
  }
}
const mapStateToProps = state => {
	return {
		data : state
	}
}

export default connect(mapStateToProps)(App);