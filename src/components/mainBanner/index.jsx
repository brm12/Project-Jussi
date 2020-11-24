import React from "react";
import "./styles.scss";
import bannerProducts from "../../assets/pictures/bannerProducts.svg";

const MainBanner = () => {
  return (
    <div className='main-banner'>
      <div className='wrapper-banner'>
        <div className='text-banner'>
          <h1>Criamos lojas que vendem mais.</h1>
          <p>
            A Jüssi é especialista na criação de lojas usando a plataforma VTEX.
            Precisa criar sua loja ou migrar de plataforma?
          </p>
          <a href='/'>Veja nossas soluções</a>
        </div>
        <img src={bannerProducts} alt='' />
      </div>
    </div>
  );
};

export default MainBanner;
