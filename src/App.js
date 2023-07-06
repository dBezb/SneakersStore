import React, { useState } from "react";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import NewArrivalsPage from "./components/NewArrivals/NewArrivalsPage";

function App() {
  const [activePage, setActivePage] = useState("home");

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <React.Fragment>
      <Header onPageChange={handlePageChange} />
      {activePage === "home" && <HomePage />}
      {activePage === "newArrivalsPage" && <NewArrivalsPage />}
    </React.Fragment>
  );
}

export default App;
