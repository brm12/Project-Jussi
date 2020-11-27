import React from "react";
import "./styles.scss";

const Card = ({ children }) => (
  <div className='containerBase'>
    <div className='containerContent'>{children}</div>
  </div>
);

export default Card;
