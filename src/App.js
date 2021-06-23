import React, { useState, useEffect, Suspense } from 'react';
import './App.css';
import Cover from'./components/cover/Cover';
import Navbar from './components/navbar/NavBar';
import About from './components/about/About';
import Slider from './components/slider/Slider';
import Footer from './components/footer/Footer';
import Info from './components/info/Info';
import { useTranslation } from 'react-i18next';

function App() {

  const { t:translate, i18n } = useTranslation();
  const [ scrollHeight, setScrollHeight ] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [ scrollHeight ])
 
  return (
    <Suspense fallback='loading'>
    <div className='App'>
      <Navbar translate={translate} i18n={i18n} isScrolling={scrollHeight}/>
      <Cover translate={translate}/>
      <About translate={translate}/>
      <Slider translate={translate}/>
      <Info translate={translate}/>
      <Footer translate={translate}/>
    </div>
    </Suspense>
  );
}

export default App;
