import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/HOME/Home";
import Navbar from "./components/HOME/Navbar";
import Footer from "./components/HOME/Footer";
import DestinationsPage from "./components/Destinations/DestinationsPage";
import TripTypesPage from "./components/TripTypesPage/TripTypesPage";
import ContactUs from "./components/Contact Us/Contact Us";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<DestinationsPage />} />
        <Route path="//trip-types" element={<TripTypesPage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
