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
    window.scrollTo(0, 0);
  };

  return (
    <React.Fragment>
      <Header activePage={activePage} onPageChange={handlePageChange} />
      {activePage === "home" && <HomePage />}
      {activePage === "newArrivalsPage" && <NewArrivalsPage />}
      {activePage === "men" && <Men />}
      {activePage === "women" && <Women />}
    </React.Fragment>
  );
}

export default App;
