import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';

import './css/ColorBox.css';

const styles = {
  copyText: {
    color: props =>
      chroma(props.background).luminance() >= 0.7 ? 'black' : 'white'
  },
  colorName: {
    color: props =>
      chroma(props.background).luminance() <= 0.08 ? 'white' : 'black'
  }
};

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  render() {
    const { name, background, moreURL, showLink, classes } = this.props;
    const { copied } = this.state;
    const isDarkColor = chroma(background).luminance() <= 0.08;
    const isLightColor = chroma(background).luminance() >= 0.7;

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className='ColorBox'>
          <div
            style={{ background }}
            className={`copy-overlay ${copied && 'show'}`}
          ></div>
          <div className={`copy-msg ${copied && 'show'}`}>
            <h1>copied!</h1>
            <p className={classes.copyText}>{this.props.background}</p>
          </div>
          <div className='copy-container'>
            <div className='box-content'>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={`copy-button ${isLightColor && 'dark-text'}`}>
              Copy
            </button>
          </div>
          {showLink && (
            <Link to={moreURL} onClick={event => event.stopPropagation()}>
              <span className={`see-more ${isLightColor && 'dark-text'}`}>
                MORE
              </span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
