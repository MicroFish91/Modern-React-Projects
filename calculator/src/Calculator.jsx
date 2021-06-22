import React, { Component } from 'react';
import CalcButton from './CalcButton';
import Display from './Display';

class Calculator extends Component {
  static defaultProps = {
    buttons: ['AC', '+/-', '%', '/', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=']
  }
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div>
        <Display />
        <CalcButton />
      </div>
    )
  }

  renderButtons(){
    const { buttons } = this.props;
    return buttons.map(button => <CalcButton buttonTitle={button} />)
  }
}


export default Calculator;
