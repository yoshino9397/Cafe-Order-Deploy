import Image from "next/image";
import styles from "../styles/CafeCard.module.css";
import Link from "next/link";

const CafeCard = ({ cafe }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${cafe._id}`} passHref>
        <a>
          <Image src={cafe.img} alt="" width="500" height="500" />
        </a>
      </Link>
      <h1 className={styles.title}>{cafe.title}</h1>
      <span className={styles.price}>${cafe.prices[0]}</span>
      <p className={styles.desc}>{cafe.desc}</p>
    </div>
  );
};

export default CafeCard;
