import React, { Component } from 'react';
import Colorbox from './Colorbox';
import './Colorgrid.css';

class Colorgrid extends Component {
  static defaultProps = {
    colorPalette: [
      'AliceBlue', 'Bisque', 'Azure', 'Aquamarine', 'Black', 'Brown', 'CadetBlue', 'Coral', 'Cornsilk', 'CornflowerBlue',
      'DarkCyan', 'DeepSkyBlue', 'DeepPink', 'FloralWhite', 'HoneyDew', 'Lavender', 'LightGoldenRodYellow', 'LimeGreen', 
      'MediumSlateBlue', 'Orchid', 'SpringGreen', 'Violet', 'Tomato', 'PaleVioletRed'
    ]
  }

  constructor(props) {
    super(props)
    const newColors = this.populateColors(this.props.number);
    this.state = {
       colors: newColors,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  populateColors(num) {
    let colorPalette = [ ...this.props.colorPalette ];
    let newColors = [];
    for (let count = 0; count < num; count++){
      const index = Math.floor(Math.random() * colorPalette.length);
      newColors.push(colorPalette.splice(index, 1)[0]);
    }
    return newColors;
  }

  replaceColor(id){
    let colors = [ ...this.state.colors ];
    let { colorPalette } = this.props;
    let newColors = colors.map((color, index) => {
      if(index === id){
        const cIndex = Math.floor(Math.random() * colors.length);
        return colorPalette.slice(cIndex, cIndex + 1)[0];
      } else {
        return color;
      }
    })
    return newColors;
  }

  handleClick(e) {
    let id = parseInt(e.target.id);
    let newColors = this.replaceColor(id);
    this.setState({ colors: newColors });
  }
  
  render() {
    let colors = this.state.colors;
    return (
      <div className="Colorgrid">
        { colors.map((color, index) => (
          <Colorbox color={color} handleClick={this.handleClick} id={index} key={index} />
        ))}
      </div>
    )
  }
}

export default Colorgrid;
