import styles from "./Contact.module.css";
function Contact() {
  return (
    <div className={styles.Contact}>
      <img className={styles.pic} src="cat.png" alt="cat" />
      <h1>Mr Wiskers</h1>
      <div className={styles.logo}>
        <p>Phone: 123456789</p>
      </div>
      <div className={styles.logo}>
        <p>Email: mr.wiskers@catnio.meow</p>
      </div>
    </div>
  );
}

export default Contact;
