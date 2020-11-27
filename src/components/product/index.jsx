import React from "react";

import "./styles.scss";

const Product = (props) => {
  return (
    <div className='product'>
      {/* <img src={props.product.image_link} alt='' /> */}
      <h3>{props.product.tid}</h3>
      {/* <p>{props.product.description}</p> */}
      <a href={props.product.product_link} target='_blank'>
        Ver Solução
      </a>
    </div>
  );
};

export default Product;