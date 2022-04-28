import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    {
      id: 1,
      image: `/img/slide1.jpg`,
      desc: "Enjoy our coffee!",
    },
    {
      id: 2,
      image: `/img/slide2.jpg`,
      desc: "Latte Lovers",
    },
    {
      id: 3,
      image: `/img/slide3.jpg`,
      desc: "Fair Trade Beans",
    },
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: "30px" }}
        onClick={() => handleArrow("l")}
      >
        <BsArrowLeftCircle fontSize="50px" color="white" />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((item) => (
          <div className={styles.imgContainer} key={item.id}>
            <div className={styles.desc}>{item.desc}</div>
            <Image src={item.image} alt="" layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <BsArrowRightCircle
          fontSize="50px"
          color="white"
          onClick={() => handleArrow("r")}
        />
      </div>
    </div>
  );
};

export default Featured;
