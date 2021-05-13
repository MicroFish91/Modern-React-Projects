import React, { Component } from 'react'
import './Coinflipper.css';

class Coinflipper extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       face: null,
       heads: 0,
       tails: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const flip = Math.floor(Math.random() * 2);
    (flip === 1) ? flip = 'heads' : flip = 'tails';
    if(flip === 'heads') {
      this.setState(prevState => {
        return { ...prevState, face: 'heads', heads: prevState.heads + 1 };
      });
    } else {
      this.setState(prevState => {
        return { ...prevState, face: 'tails', tails: prevState.tails + 1 };
      });
    }
  }
  
  render() {
    let { heads, face, tails } = this.state;
    let totalFlips = heads + tails;
    let url = face && `https://tinyurl.com/react-coin-${face}-jpg`;
    
    return (
      <div className="Coinflipper">
          <div className="coin-container">
            <h1>Let's flip a coin!</h1>
            {face && <img src={url} alt="coin" />}
            <button onClick={() => this.handleClick()}>Flip me!</button>
            {`Out of ${totalFlips}, there have been ${heads} heads and ${tails} tails.`}
          </div>
      </div>
    )
  }
}

export default Coinflipper
