import React, { Component } from 'react';

 class PractisePageSecondComp extends Component {
  constructor(props){
    super(props);
    this.state = {
         data: 'www.javatpoint.com'
      }
    }
render() {
  return(
<div className="Age">
    <h1>{this.props.name}</h1>
    <div className="Agelabel">
    Your Age:-<span>{this.props.age}</span>
    </div>
    <button onClick={this.props.onAgeUp}>Age Up</button>
    <button onClick={this.props.onAgeDown}>Age Down</button>
    </div>
  );
}
}

export default PractisePageSecondComp;
