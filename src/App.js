import React from "react";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import NewArrivals from "./components/NewArrivals/NewArrivals";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Layout />
      <NewArrivals />
      <AboutUs />
      <Footer />
    </React.Fragment>
  );
}

export default App;
