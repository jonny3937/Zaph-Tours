import React from 'react';
import Navbar from './components/HOME/Navbar';
import Hero from './components/HOME/Hero';
import AboutZaphTours from './components/HOME/AboutZaphTours';
import FeaturedDestinations from './components/HOME/FeaturedDestinations';
import TestimonialsSection from './components/HOME/TestimonialsSection';
const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutZaphTours />
      <FeaturedDestinations />
      <TestimonialsSection/>
      

    </>
  );
};

export default App;

