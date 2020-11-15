import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classes from './Backdrop.module.css';

class Backdrop extends Component {

  render() {
    return ReactDOM.createPortal(
      <div onClick={this.props.clicked}
        className={[classes.Backdrop, classes.Show].join(' ')} />,
      document.getElementById('backdrop'));
  }
}


export default Backdrop;
