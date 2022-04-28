import styles from "../styles/Top.module.css";

const Top = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: url(`${PF}top.jpg`) }}
    >
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
