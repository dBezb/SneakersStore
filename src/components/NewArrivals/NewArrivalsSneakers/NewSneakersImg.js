import NewSneakersOne from "../NewArrivalsSneakers/SneakersImages/NewSneakersOne.png";
import NewSneakersTwo from "../NewArrivalsSneakers/SneakersImages/NewSneakersTwo.png";
import NewSneakersThree from "../NewArrivalsSneakers/SneakersImages/NewSneakersThree.png";
import NewSneakersFour from "../NewArrivalsSneakers/SneakersImages/NewSneakersFour.png";
import NewSneakersFive from "../NewArrivalsSneakers/SneakersImages/NewSneakersFive.png";
import NewSneakersSix from "../NewArrivalsSneakers/SneakersImages/NewSneakersSix.png";
import NewSneakersSeven from "../NewArrivalsSneakers/SneakersImages/NewSneakersSeven.png";
import NewSneakersEight from "../NewArrivalsSneakers/SneakersImages/NewSneakersEight.png";
import NewSneakersNine from "../NewArrivalsSneakers/SneakersImages/NewSneakersNine.png";
import styles from "./NewSneakersImg.module.css";

const NewSneakersImg = () => {
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
      id: 2,
      src: NewSneakersTwo,
      alt: "Sneakers image 2",
      caption: "Nike Air Jordan 90",
      price: "85$",
    },
    {
      id: 3,
      src: NewSneakersThree,
      alt: "Sneakers image 3",
      caption: "RS-X-INTL Game",
      price: "69$",
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

  return (
    <div className={styles.product}>
      {images.map((image) => (
        <div key={image.id}>
          <img src={image.src} alt={image.alt} />
          <h3>{image.caption}</h3>
          <p>{image.price}</p>
        </div>
      ))}
    </div>
  );
};

export default NewSneakersImg;
