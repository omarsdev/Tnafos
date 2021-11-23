import React from "react";

export const Alert = (props) => {
  return (
    <div>
      {props.message}
      <div className="close-alert" />
    </div>
  );
};
