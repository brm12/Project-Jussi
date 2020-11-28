import React, { useEffect, useContext } from "react";
import Card from "../../components/card";
import Product from "../../components/product";
import { AppContext } from "../../productFetch/index";
import api from "../../domain/api/api";
import "./styles.scss";

const OurSolution = () => {
  const { state, setProductList } = useContext(AppContext);

  useEffect(() => {
    api
      .get(`/shows?q=homeland`)
      .then((response) => {
        setProductList(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div id='our-solution'>
      <Card>
        <h1 className='products'>
          <span className='icon'>//</span>&nbsp;
          <span className='text'>Nossas soluções</span>
        </h1>
        <div className='productList'>
          {state.length > 0 &&
            state.map((product) => (
              <Product key={product.index} product={product} />
            ))}
        </div>
      </Card>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default OurSolution;
