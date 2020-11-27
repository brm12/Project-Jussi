import React from "react";
import "./styles.scss";

const Contact = () => {
  return (
    <div className='contactArea'>
      <p className='infoStore'>
        Essa loja foi construída usando uma das nossas soluções da plataforma
        VTEX. tenha a sua.
      </p>
      <p className='infoContact'>
        <span>Entre em contato</span>
        <a href='mailto:comercial@jussi.com.br'>comercial@jussi.com.br</a>
      </p>
    </div>
  );
};

export default Contact;
