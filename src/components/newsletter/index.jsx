import React from "react";
import "./styles.scss";

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <p>
        <span>//</span>receba novidades da nossa área de produtos digitais.
      </p>
      <div className='newsletter-wrapper'>
        <input type='text' placeholder='Digite seu e-mail' />
        <a href='#'>Cadastrar</a>
      </div>
    </div>
  );
};

export default Newsletter;
