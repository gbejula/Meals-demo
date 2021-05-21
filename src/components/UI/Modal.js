import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const BackDrop = props => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlays = props => {
  return (
    <div className={classes.modal}>
      <div className={classes.content} onClick={props.onDismiss}>
        {props.children}
      </div>
    </div>
  );
};

const portalElements = document.getElementById('overlays');

const Modal = props => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClose={props.onClose} />,
        portalElements
      )}
      {ReactDOM.createPortal(
        <ModalOverlays onDismiss={props.onDismiss}>
          {props.children}
        </ModalOverlays>,
        portalElements
      )}
    </Fragment>
  );
};

export default Modal;
