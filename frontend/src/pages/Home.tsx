import React from 'react';
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import About from '../components/About';
import Stats from '../components/Stats';
import Features from '../components/Features';
import Products from '../components/Products';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import Blog from '../components/Blog';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Clients />
      <About />
      <Stats />
      <Features />
      <Products />
      <Projects />
      <Certificates />
      <Blog />
    </>
  );
};

export default Home;
