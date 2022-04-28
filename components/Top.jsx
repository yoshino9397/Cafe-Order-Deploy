import styles from "../styles/Top.module.css";

const Top = () => {
  return (
    <div className={styles.container}>
      <div className={styles.slide}>
        <div className={styles.item}>
          <h1 className={styles.h1}>
            Welcome to
            <br />
            our cafe
          </h1>
          <h2 className={styles.desc}>Life is short, stay awake for it.</h2>
        </div>
        <div className={styles.item}>
          <h2 className={styles.desc}>WE ARE OPEN</h2>
          <h2 className={styles.h2}>8AM - 9PM</h2>
        </div>
      </div>
    </div>
  );
};

export default Top;
