import ImageOne from "../../../assets/ImageOne.png";
import ImageTwo from "../../../assets/ImageTwo.png";
import ImageThree from "../../../assets/ImageThree.png";
import ImageFour from "../../../assets/ImageFour.png";
import styles from "./Images.module.css";

const Images = () => {
  const images = [
    {
      id: 1,
      src: ImageOne,
      alt: "Image 1",
      caption: "Adidas Beluga",
      price: "95$",
      type: "button",
    },
    {
      id: 2,
      src: ImageTwo,
      alt: "Image 2",
      caption: "Nike Zoom",
      price: "75$",
    },
    {
      id: 3,
      src: ImageThree,
      alt: "Image 3",
      caption: "Nike Air Jordan XT",
      price: "130$",
    },
    {
      id: 4,
      src: ImageFour,
      alt: "Image 4",
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

export default Images;
