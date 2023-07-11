import React, { useState } from "react";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import NewArrivalsPage from "./components/NewArrivals/NewArrivalsPage";
import Men from "./components/Men/Men";
import Women from "./components/Women/Women";

function App() {
  const [activePage, setActivePage] = useState("home");

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <React.Fragment>
      <Header onPageChange={handlePageChange} />
      {activePage === "home" && <HomePage />}
      {activePage === "newArrivalsPage" && (
        <NewArrivalsPage onPageChange={handlePageChange} />
      )}
      {activePage === "men" && <Men />}
      {activePage === "women" && <Women />}
    </React.Fragment>
  );
}

export default App;
