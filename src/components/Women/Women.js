import { useState } from "react";
import WomenSneakers from "./WomenSneakers/WomenSneakers";
import Footer from "../HomePage/Footer/Footer";
const Women = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
  };

  return (
    <div>
      <WomenSneakers
        selectedBrand={selectedBrand}
        onBrandChange={handleBrandChange}
      />
      <Footer />
    </div>
  );
};

export default Women;
