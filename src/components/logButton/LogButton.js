import React from "react";

const LogButton = (props) => {
  return (
    <div>
      <button className="ui blue button">{props.text}</button>
    </div>
  );
};

export default LogButton;
