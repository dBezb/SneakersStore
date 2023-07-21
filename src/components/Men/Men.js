import { useState } from "react";
import MenSneakers from "./MenSneakers/MenSneakers";
import Footer from "../HomePage/Footer/Footer";

const Men = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
  };
  return (
    <div>
      <MenSneakers
        selectedBrand={selectedBrand}
        onBrandChange={handleBrandChange}
      />
      <Footer />
    </div>
  );
};

export default Men;
