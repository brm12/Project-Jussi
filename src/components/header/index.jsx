import React, { useState, useContext } from "react";
import "./styles.scss";
import shoppingCart from "../../assets/pictures/shopping-cart.svg";
import Logo from "../../assets/logo/logoJussi.svg";
import { AppContext } from "../../productFetch/index";
import api from "../../domain/api/api";
import Search from "../../assets/pictures/search.svg";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const { setProductList } = useContext(AppContext);

  function search() {
    if (searchValue.length > 3) {
      api
        .get(`/shows?q=${searchValue}`)
        .then((response) => {
          setProductList(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function handleSearch(event) {
    setSearchValue(event.target.value);
  }
  return (
    <div className='header'>
      <div className='wrapper-content'>
        <div className='wrapper-left'>
          <img src={Logo} alt='Logo' />
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
                value={searchValue}
                placeholder='Buscar'
                onChange={handleSearch}
              />
              <img src={Search} alt='search' onClick={search} />
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
