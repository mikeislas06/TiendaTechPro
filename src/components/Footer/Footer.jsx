import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <p
        style={{
          textAlign: 'center',
          fontFamily: 'var(--fuenteSecundaria)',
          textTransform: 'uppercase',
          fontSize: '2rem',
          color: 'var(--primario)',
          padding: '3rem 0 0 0',
        }}>
        © All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
