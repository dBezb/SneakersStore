import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import NewArrivalsPage from "./components/NewArrivals/NewArrivalsPage";
import Men from "./components/Men/Men";
import Women from "./components/Women/Women";

function App() {
  const [activePage, setActivePage] = useState("/home");

  const handlePageChange = (page) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  };

  return (
    <Router>
      <React.Fragment>
        <Header activePage={activePage} onPageChange={handlePageChange} />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/new-arrivals" element={<NewArrivalsPage />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
        </Routes>
      </React.Fragment>
    </Router>
  );
}

export default App;
