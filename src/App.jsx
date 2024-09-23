import React, { useState, useEffect } from "react";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import MainContent from "./components/MainContent";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Catalogo from "./components/Catalogo";
import Cadastro from "./components/Cadastro";
import Login from "./components/Login";
import EditarPizza from "./components/EditarPizza";
import PaginaConfirmacao from "./components/PaginaConfirmacao";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent landingPageData={landingPageData} />} />
        <Route path="/Catalogo" element={<Catalogo />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/EditarPizza" element={<EditarPizza />} />
        <Route path="/PaginaConfirmacao" element={<PaginaConfirmacao />} />
      </Routes>
    </Router>
  );
};

export default App;
