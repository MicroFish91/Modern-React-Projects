import React, { Component } from 'react';
import CalcButton from './CalcButton';
import './Calculator.css';
import Display from './Display';

class Calculator extends Component {
  static defaultProps = {
    buttons: [
      {t:'AC', c: '#505050'}, {t:'+/-', c: '#505050'}, {t:'%', c: '#505050'}, {t:'/', c: '#FF9500'}, 
      {t:'7', c: '#D4D4D2'}, {t:'8', c: '#D4D4D2'}, {t:'9', c: '#D4D4D2'}, {t:'X', c: '#FF9500'},
      {t:'4', c: '#D4D4D2'}, {t:'5', c: '#D4D4D2'}, {t:'6', c: '#D4D4D2'}, {t:'-', c: '#FF9500'},
      {t:'1', c: '#D4D4D2'}, {t:'2', c: '#D4D4D2'}, {t:'3', c: '#D4D4D2'}, {t:'+', c: '#FF9500'},
      {t:'0', c: '#D4D4D2', s: 2}, {t:'.', c: '#D4D4D2'}, {t:'=', c: '#FF9500'}
    ]
  }
  
  constructor(props) {
    super(props);
  
    this.state = {
       calcInputs: [],
       display: ""
    }
    
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  updateDisplay(input){
    // calculator function
  }
  
  render() {
    const { calcInputs, display } = this.state;
    const operations = { 
      updateDisplay: this.updateDisplay
    };
    
    return (
      <div className="Calculator">
        <Display calcInputs={calcInputs} display={display} />

        <div className="calculator-buttons">
          {this.renderButtons()}
        </div>
      </div>
    )
  }

  renderButtons(){
    const { buttons } = this.props;
    return buttons.map(button => {
      return (
              <CalcButton 
                text={button.t} 
                color={button.c} 
                span={button.s} 
                updateDisplay={this.updateDisplay}
              />
      ); 
    });
  }
}

export default Calculator;
