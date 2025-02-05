/* eslint-disable react/prop-types */
import styles from "../css/Modal.module.css";

const Modal = ({ setModal }) => {
  return (
    <div className={styles.container}>
      <div className={styles.modalData}>
        This is a React App shocasing info about Weather which is real time.
        This app has search feature which utilizes debouncing concept to search
        any city in the world without user needing to press enter and provides
        weather info. Api is provided by open-meteo.com and designed and
        programmed by{" "}
        <a
          href="https://www.linkedin.com/in/abhinav-babar-07/"
          target="_blank"
          style={{ color: "blue" }}
        >
          Abhinav Babar
        </a>
        . Have fun knowing about weather in your city.
      </div>
      <span onClick={() => setModal((prev) => !prev)} className={styles.close}>
        ❌
      </span>
    </div>
  );
};

export default Modal;
