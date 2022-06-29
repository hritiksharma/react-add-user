import React from "react";
import classes from "./ErrorModal.module.css";
const ErrorModel = (props) => {
  console.log("inside Popup");
  return (
    <div className={classes.popupbox}>
      <div className={classes.box}>
        <span className={classes.closeicon} onClick={props.handleClose}>
          x
        </span>
        {props.content}
      </div>
    </div>
  );
};

export default ErrorModel;
