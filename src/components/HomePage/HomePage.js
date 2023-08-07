import React from "react";
import AboutUs from "../HomePage/AboutUs/AboutUs";
import Footer from "../HomePage/Footer/Footer";
import Layout from "../HomePage/Layout/Layout";
import NewArrivals from "../HomePage/NewArrivals/NewArrivals";

const HomePage = (props) => {
  return (
    <React.Fragment>
      <Layout onPageChange={props.onPageChange} />
      <NewArrivals onPageChange={props.onPageChange} />
      <AboutUs />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
