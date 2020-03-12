import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './css/Palette.css';

class Palette extends Component {
  render() {
    const colorBoxes = this.props.palette.colors[500].map(color => (
      <ColorBox background={color.hex} name={color.name} />
    ));
    return (
      <div className='Palette'>
        {/* Navbar goes here */}
        <div className='Palette-colors'>
          {colorBoxes}
        </div>
        {/* Footer goes here */}
      </div>
    );
  }
}

export default Palette;
