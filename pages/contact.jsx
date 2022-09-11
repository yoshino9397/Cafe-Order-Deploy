import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>JOIN OUR TEAM !</h1>
        <h3 className={styles.desc}>
          Cafe Lynx is always looking for hard working, down-to-earth
          individuals who work well under pressure, and are both flexible and
          reliable. <br />
          In return, Cafe Lynx offers a fun and fast paced place to work, great
          rates of pay, onsite and at-home training, benefit packages after
          completion of a trial period, and unlimited opportunities for career
          development.
        </h3>
      </div>
      <div className={styles.item}>
        <form className={styles.form}>
          <div className={styles.inputs}>
            <label htmlFor="fname" className={styles.label}>
              name
            </label>
            <input type="text" className={styles.input} />
          </div>
          <div className={styles.inputs}>
            <label htmlFor="email" className={styles.label}>
              email
            </label>
            <input type="email" className={styles.input} />
          </div>
          <div className={styles.inputs}>
            <label htmlFor="phone" className={styles.label}>
              phone
            </label>
            <input type="tel" className={styles.input} />
          </div>
          <div className={styles.inputs}>
            <label htmlFor="message" className={styles.label}>
              message
            </label>
            <textarea cols="30" rows="5" className={styles.textarea} />
          </div>
          <button className={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
