import React from 'react';

//Styles
import './Products.css';

const Products = () => {
  return (
    <main className='contenedor modelos'>
      <h2 className='text-center degradado-verde header-modelos'>
        Choose your TechPRO
      </h2>
      <div className='listado-modelos'>
        <div className='modelo modelo-x'>
          <h3>TechPRO X</h3>
          <p className='precio'>$299</p>
        </div>
        <div className='modelo modelo-y'>
          <h3>TechPRO Y</h3>
          <p className='precio'>$399</p>
        </div>
        <div className='modelo modelo-z'>
          <h3>TechPRO Z</h3>
          <p className='precio'>$499</p>
        </div>
      </div>
    </main>
  );
};

export default Products;
