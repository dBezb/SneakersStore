import Footer from "../HomePage/Footer/Footer";
import NewArrivalsSneakers from "./NewArrivalsSneakers/NewArrivalsSneakers";

const NewArrivalsPage = (props) => {
  return (
    <div>
      <NewArrivalsSneakers onPageChange={props.onPageChange} />
      <Footer />
    </div>
  );
};

export default NewArrivalsPage;
