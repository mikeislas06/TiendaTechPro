import React from 'react';
import headerPNG from '../../assets/img/header.png';

//Styles
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='contenedor contenido-header'>
        <div className='imagen-header'>
          <picture>
            <img
              loading='lazy'
              src={headerPNG}
              width='1000'
              height='600'
              alt='Header headphones'
            />
          </picture>
        </div>
        <div className='texto-header'>
          <p className='tagline-producto'>Professional Sound</p>
          <h1 className='nombre-producto degradado-verde'>TechPRO</h1>
          <p className='descripcion-producto'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
            itaque eaque laudantium veniam et, sit laborum, unde praesentium
            iste, ipsum modi. Error placeat fugiat, dolor suscipit voluptate
            aliquam ut labore!
          </p>
          <p className='precio-producto'>
            <span>$299</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
