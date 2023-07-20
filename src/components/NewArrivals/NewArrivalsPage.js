import { useState } from "react";
import Footer from "../HomePage/Footer/Footer";
import NewArrivalsSneakers from "./NewArrivalsSneakers/NewArrivalsSneakers";

const NewArrivalsPage = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
  };

  return (
    <div>
      <NewArrivalsSneakers
        selectedBrand={selectedBrand}
        onBrandChange={handleBrandChange}
      />
      <Footer />
    </div>
  );
};

export default NewArrivalsPage;
