import React from "react";
import "./styles.scss";

const Product = (props) => {
  return (
    <div className='product'>
      <img src={props.product.show.image} alt='Image' />
      <h3>{props.product.show.name}</h3>
      <p>{props.product.show.summary}</p>
      <a href={props.product.product_link} target='_blank'>
        Ver solução
      </a>
    </div>
  );
};

export default Product;
