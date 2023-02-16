import React, { Component } from 'react';
import { connect } from 'react-redux';

export class PractisePageSecond extends Component {
render() {
  return(

    <div className="Age">
    <div className="Agelabel">
    Your Age:-<span>{this.props.age}</span>
    </div>
    <button onClick={this.props.onAgeUp}>Age Up</button>
    <button onClick={this.props.onAgeDown}>Age Down</button>
    </div>
  );
}
}

const mapStateToProps = state => {
    return {
      age: state.age
    };
  };

const mapDispatchToProps = dispatch => {
  return {
    onAgeUp:() => dispatch({type: "AGE UP",value:1}),
    oneAgeDown:()=> dispatch({type: "AGE DOWN",value:0})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PractisePageSecond);
