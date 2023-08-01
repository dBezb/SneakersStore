import { Link } from "react-router-dom";
import NewSneakersTwo from "../../NewArrivals/NewArrivalsSneakers/SneakersImages/NewSneakersTwo.png";
import NewSneakersFour from "../../NewArrivals/NewArrivalsSneakers/SneakersImages/NewSneakersFour.png";
import NewSneakersFive from "../../NewArrivals/NewArrivalsSneakers/SneakersImages/NewSneakersFive.png";
import NewSneakersSix from "../../NewArrivals/NewArrivalsSneakers/SneakersImages/NewSneakersSix.png";
import NewSneakersSeven from "../../NewArrivals/NewArrivalsSneakers/SneakersImages/NewSneakersSeven.png";
import styles from "./MenSneakersImg.module.css";

const MenSneakersImg = (props) => {
  const images = [
    {
      id: 2,
      src: NewSneakersTwo,
      alt: "Sneakers image 2",
      caption: "Nike Air Jordan 90",
      price: "85$",
    },

    {
      id: 4,
      src: NewSneakersFour,
      alt: "Sneakers image 4",
      caption: "Puma Suede",
      price: "45$",
    },
    {
      id: 5,
      src: NewSneakersFive,
      alt: "Sneakers image 5",
      caption: "Adidas NMD",
      price: "79$",
    },
    {
      id: 6,
      src: NewSneakersSix,
      alt: "Sneakers image 6",
      caption: "Nike Zoom",
      price: "75$",
    },
    {
      id: 7,
      src: NewSneakersSeven,
      alt: "Sneakers image 7",
      caption: "Nike Air Jordan XT",
      price: "130$",
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

export default MenSneakersImg;
