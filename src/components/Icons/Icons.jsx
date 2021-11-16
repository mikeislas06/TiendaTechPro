import React from 'react';
import iconBattery from '../../assets/img/icono-bateria.svg';
import iconWarranty from '../../assets/img/icono-garantia.svg';
import iconSound from '../../assets/img/icono-sonido.svg';

//Styles
import './Icons.css';

const Icons = () => {
  return (
    <section className='contenedor'>
      <div className='iconos'>
        <div className='icono'>
          <img src={iconSound} alt='imagen icono' />
          <h3>Great Sound</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, maxime
            consequatur! A, est modi iste alias culpa et deserunt architecto.
          </p>
        </div>
        <div className='icono'>
          <img src={iconWarranty} alt='imagen icono' />
          <h3>Lifetime Warranty</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, maxime
            consequatur! A, est modi iste alias culpa et deserunt architecto.
          </p>
        </div>
        <div className='icono'>
          <img src={iconBattery} alt='imagen icono' />
          <h3>+20 hrs Battery life</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, maxime
            consequatur! A, est modi iste alias culpa et deserunt architecto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Icons;
