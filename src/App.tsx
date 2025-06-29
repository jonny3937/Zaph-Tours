import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/HOME/Home';
import Navbar from './components/HOME/Navbar';
import Footer from './components/HOME/Footer';
import DestinationsPage from './components/Destinations/DestinationsPage';
import TripTypesPage from './components/TripTypesPage/TripTypesPage';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/destination" element={<DestinationsPage />} />
           <Route path="//trip-types" element={<TripTypesPage />} />
          
     
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
