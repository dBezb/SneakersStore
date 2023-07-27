import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import NewArrivalsPage from "./components/NewArrivals/NewArrivalsPage";
import Men from "./components/Men/Men";
import Women from "./components/Women/Women";
import ProductDetails from "./components/NewArrivals/NewArrivalsSneakers/ProductDetails";

function App() {
  const storedActivePage = localStorage.getItem("activePage");
  const initialActivePage = storedActivePage || "/home";
  const [activePage, setActivePage] = useState(initialActivePage);

  const handlePageChange = (page) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    localStorage.setItem("activePage", activePage);
  }, [activePage]);

  return (
    <Router>
      <Header activePage={activePage} onPageChange={handlePageChange} />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/new-arrivals" element={<NewArrivalsPage />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
