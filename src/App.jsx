import React from 'react';

//Components
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Icons from './components/Icons/Icons';
import Newsletter from './components/Newsletter/Newsletter';
import Products from './components/Products/Products';

function App() {
  return (
    <>
      <Header />
      <Icons />
      <About />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
