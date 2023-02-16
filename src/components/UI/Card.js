import React from "react";
import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  //help us to reuse card component with differrent className
  return <div className={classes}>{props.children}</div>;
  //props.children is prop which allow us to set othe jsx elements inside the component
};

export default Card;
