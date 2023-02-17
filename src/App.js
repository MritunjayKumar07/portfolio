import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Component/Header/Header';
import Profile from './PortfolioContainer/Home/Profile';
import Contact from './PortfolioContainer/ContactMe/Contact';
import AboutUs from './PortfolioContainer/AboutUs/AboutUs.js';
import Service from './PortfolioContainer/Service/index';
import Blog from './PortfolioContainer/Blog/Blog';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Profile />} />
        <Route path="contact" exact element={<Contact />} />
        <Route path="about" exact element={<AboutUs />} />
        <Route path="service" exact element={<Service />} />
        <Route path="blog" exact element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
