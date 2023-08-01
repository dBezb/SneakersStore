import { Link } from "react-router-dom";
import NewSneakersOne from "../../NewArrivals/NewArrivalsSneakers/SneakersImages/NewSneakersOne.png";
import NewSneakersThree from "../../NewArrivals/NewArrivalsSneakers/SneakersImages/NewSneakersThree.png";
import NewSneakersEight from "../../NewArrivals/NewArrivalsSneakers/SneakersImages/NewSneakersEight.png";
import NewSneakersNine from "../../NewArrivals/NewArrivalsSneakers/SneakersImages/NewSneakersNine.png";
import styles from "./WomenSneakersImg.module.css";

const WomenSneakersImg = (props) => {
  const images = [
    {
      id: 1,
      src: NewSneakersOne,
      alt: "Sneakers image 1",
      caption: "Jordan Delta 2",
      price: "140$",
      type: "button",
    },
    {
      id: 3,
      src: NewSneakersThree,
      alt: "Sneakers image 3",
      caption: "RS-X-INTL Game",
      price: "69$",
    },
    {
      id: 8,
      src: NewSneakersEight,
      alt: "Sneakers image 8",
      caption: "Adidas Beluga",
      price: "95$",
    },
    {
      id: 9,
      src: NewSneakersNine,
      alt: "Sneakers image 9",
      caption: "Nike Wobler",
      price: "105$",
    },
  ];

  const filteredImages = props.selectedBrand
    ? images.filter((image) => image.caption.includes(props.selectedBrand))
    : images;

  return (
    <div className={styles.product}>
      {filteredImages.map((image) => (
        <div key={image.id}>
          <Link to={`/product/${image.id}`}>
            <img src={image.src} alt={image.alt} />
            <h3>{image.caption}</h3>
            <p>{image.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default WomenSneakersImg;
