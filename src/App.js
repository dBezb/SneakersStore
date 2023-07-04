import React from "react";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import NewArrivals from "./components/NewArrivals/NewArrivals";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Layout />
      <NewArrivals />
    </React.Fragment>
  );
}

export default App;
