import React from "react";
import "./styles.scss";
import arrow from "../../assets/pictures/arrow.png";
import logoBrastemp from "../../assets/logo/logo-brastemp.svg";
import logoCompraCerta from "../../assets/logo/logo-compra-certa.svg";
import logoConsul from "../../assets/logo/logo-consul.svg";
import logoTheBar from "../../assets/logo/logo-thebar.svg";

const LogoBar = () => {
  return (
    <div className='logo-bar'>
      <div className='wrapper'>
        <div className='text-logo'>
          <h4>Nossas principais lojas VTEX</h4>
          <span>
            <img src={arrow} alt='arrow' />
          </span>
        </div>
        <div className='logo-wrapper'>
          <div className='logo'>
            <img src={logoBrastemp} alt='Logo Brastemp' />
          </div>
          <div className='logo'>
            <img src={logoCompraCerta} alt='Logo Compra certa' />
          </div>
          <div className='logo'>
            <img src={logoConsul} alt='Logo Consul' />
          </div>
          <div className='logo'>
            <img src={logoTheBar} alt='Logo Thebar' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoBar;
