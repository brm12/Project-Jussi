import React from "react";
import "./styles.scss";
import PictureJussi from "../../assets/pictures/pictureJussi.svg";

const About = () => {
  return (
    <div className='about-us'>
      <div className='text-jussi'>
        <h2>
          Olá, somos
          <br />a Jüssi
        </h2>
        <p>
          A Jüssi é uma agência integrante do grupo global WPP que vem há 10
          anos consolidando o pensamento voltado para produtos e resolução de
          problemas. Nosso área dedicada exclusivamente para Produtos Digitais é
          organizada em 6 especialidades: Product Managamenet, User Experience
          Design, SEO, Tecnologia, Agile e User Behavior Analytics.
        </p>
        <a href='https://jussi.com.br/' target='_blank'>
          Conheça a Jüssi
        </a>
      </div>
      <div className='image'>
        <img src={PictureJussi} alt='Picture Jussi' />
      </div>
    </div>
  );
};
export default About;
