import React, {Component} from 'react'
import {connect} from 'react-redux'

import {Alert} from 'react-bootstrap'
class Warning extends Component{
    render(){
        if(this.props.balance >= 0){
            return null;
        }
       return(
          <div><Alert bsStyle="danger">Oops!!!   balance is negative </Alert></div>
       )
    }
}

  const mapStatetoProps  =(state) =>{
    return {
      balance: state.balance
    }
  }
  export default connect (mapStatetoProps)(Warning)