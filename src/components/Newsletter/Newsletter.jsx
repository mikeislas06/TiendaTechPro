import React from 'react';

//Styles
import './Newsletter.css';

const Newsletter = () => {
  return (
    <section className='newsletter'>
      <div className='contenido-newsletter contenedor'>
        <div className='texto-newsletter'>
          <h2>Register to our Newsletter</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed iusto
            unde quae architecto? Sunt tempore consequatur eum cupiditate
            asperiores quasi, explicabo laudantium, natus culpa rerum, sint quos
            in ut vero!
          </p>

          <form className='formulario'>
            <div className='input'>
              <input type='text' placeholder='Your email' />
            </div>
            <input type='submit' value='Register' />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
