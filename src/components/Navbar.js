import React, { Component } from 'react';

import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import MenuItem from '@material-ui/core/MenuItem';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import './css/Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: 'hex', open: false };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  handleFormatChange(event) {
    this.setState({ format: event.target.value, open: true });
    this.props.handleChange(event.target.value);
  }

  closeSnackbar() {
    this.setState({ open: false });
  }

  render() {
    const { level, changeLevel } = this.props;
    const { format } = this.state;
    return (
      <header className='Navbar'>
        <div className='logo'>
          <a href='/'>react-colors</a>
        </div>
        <div className='slider-container'>
          <span>Level: {level}</span>
          <div className='slider'>
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <div className='select-container'>
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value='hex'>HEX - #ffffff </MenuItem>
            <MenuItem value='rgb'>RGB - rbg(255,255,255) </MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(255,255,255, 1.0) </MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={this.state.open}
          autoHideDuration={3000}
          message={<span id='message-id'>Format Changed.</span>}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          // ON CLOSE ALLOWS USER TO CLICK ANYWHERE ON PAGE TO CLOSE SNACKBAR
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color='inherit'
              key='close'
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </header>
    );
  }
}

export default Navbar;
