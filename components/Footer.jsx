import Image from "next/image";
import styles from "../styles/Footer.module.css";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src={`${PF}footer.jpg`} objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.title}>DO YOU HAVE A QUESTIONS?</h2>
          <h3 className={styles.phone}>noreply@yoshino.com</h3>
          <div className={styles.media}>
            <AiFillInstagram />
            <AiFillTwitterCircle />
            <BsFacebook />
          </div>
        </div>
        <div className={styles.card}>
          <h2 className={styles.motto}>FIND OUR RESTAURANTS</h2>
          <p className={styles.text}>
            476 5th Ave,
            <br /> NewYork, 3456
            <br /> (111) 1111-1111
          </p>
          <p className={styles.text}>
            45 Rockefeller Plaza,
            <br /> NewYork, 3456
            <br /> (111) 1111-1112
          </p>
          <p className={styles.text}>
            131a Orchard St,
            <br /> NewYork, 3456
            <br /> (111) 1111-1113
          </p>
          <p className={styles.text}>
            38 MacDougal St,
            <br /> NewYork, 3456
            <br /> (111) 1111-1114
          </p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.title}>BOOK A TABLE</h2>
          <p className={styles.text}>+81 (0) 801 693 342</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
