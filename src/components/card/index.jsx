import React from "react";
import "./styles.scss";

const Card = ({ children }) => (
  <div className='wrapper-base'>
    <div className='wrapper-content'>{children}</div>
  </div>
);

export default Card;
