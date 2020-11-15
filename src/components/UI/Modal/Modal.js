import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

class Modal extends Component {
  render() {
    return ReactDOM.createPortal((<div className={[classes.Modal, classes.Show].join(' ')}>
      {this.props.children}
    </div>), document.getElementById('modal'));
  }
}


export default Modal;
