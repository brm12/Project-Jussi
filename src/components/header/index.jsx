import React from "react";
import "./styles.scss";
import search from "../../assets/pictures/search.svg";
import shoppingCart from "../../assets/pictures/shopping-cart.svg";
import logo from "../../assets/logo/logoJussi.svg";

const Header = () => {
  return (
    <div className='header'>
      <div className='wrapper-content'>
        <div className='wrapper-left'>
          <img src={logo} alt='Logo' />
          <nav>
            <a href='/'>Nossas soluções</a>
            <a href='/'>Conheça a Jüssi</a>
          </nav>
        </div>
        <div className='wrapper-right'>
          <nav>
            <div className='search-box'>
              <input
                type='text'
                name='search'
                value=''
                placeholder='Buscar'
                onChange=''
              />
              <img src={search} alt='search' onClick='' />
            </div>
            <a href='/'>Login</a>
            <a href='/'>
              <img src={shoppingCart} alt='shoppingCart' />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
