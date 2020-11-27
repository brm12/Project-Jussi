import React, { useState, useEffect } from "react";
import "./styles.scss";
import data from "../../api/api";

const OurSolution = () => {
  const [products, setProdutos] = useState([]);

  useEffect(() => {
    setProdutos(data);
  }, []);

  return (
    <div className='our-solution'>
      <div className='wrapper-our-solution'>
        <div className='text-title'>Nossas soluções</div>
        <div className='content'>
          {products.length > 0 &&
            products.map((product) => (
              <div className='product-wrapper' key={product.id}>
                <div className='id'> {product.id} </div>
                <h4>{product.title}</h4>
                <p>{product.description}</p>
                <ul>
                  <li>{product.list.li01}</li>
                  <li>{product.list.li02}</li>
                  <li>{product.list.li03}</li>
                </ul>
                <a href='/'>Ver solução</a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OurSolution;
