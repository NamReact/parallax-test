import React from "react";
import "./index.css";

const ParallaxWrapper = props => {
  return (
    <div className="parallax-wrapper" id={props.id}>
      {props.children}
    </div>
  );
};

export default ParallaxWrapper;
