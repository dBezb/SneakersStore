import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import HomePage from "./components/HomePage/HomePage";
import NewArrivalsPage from "./components/NewArrivals/NewArrivalsPage";
import Men from "./components/Men/Men";
import Women from "./components/Women/Women";
import ProductDetails from "./components/NewArrivals/NewArrivalsSneakers/ProductDetails";
import CartContextProvider from "./store/CartContextProvider";

function App() {
  const storedActivePage = localStorage.getItem("activePage");
  const initialActivePage = storedActivePage || "/";
  const [activePage, setActivePage] = useState(initialActivePage);
  const [cartIsVisible, SetCartIsVisible] = useState(false);

  const handlePageChange = (page) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  };

  const handleShowCart = () => {
    SetCartIsVisible(true);
  };

  const handleHideCart = () => {
    SetCartIsVisible(false);
  };

  useEffect(() => {
    localStorage.setItem("activePage", activePage);
  }, [activePage]);

  return (
    <CartContextProvider>
      <Router>
        <Header
          activePage={activePage}
          onPageChange={handlePageChange}
          onShowCart={handleShowCart}
        />
        <Routes>
          <Route
            path="/"
            element={<HomePage onPageChange={handlePageChange} />}
          />
          <Route path="/new-arrivals" element={<NewArrivalsPage />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        {cartIsVisible && <Cart onHideCart={handleHideCart} />}
      </Router>
    </CartContextProvider>
  );
}

export default App;
