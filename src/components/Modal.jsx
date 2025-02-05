/* eslint-disable react/prop-types */
import styles from "../css/Modal.module.css";

const Modal = ({ setModal }) => {
  return (
    <div className={styles.container}>
      <div className={styles.modalData}>
        This is a React App shocasing info about Weather which is real time.
        This app has search feature using debouncing concept to search any city
        in world and provides weather info.
      </div>
      <span onClick={() => setModal((prev) => !prev)} className={styles.close}>
        ❌
      </span>
    </div>
  );
};

export default Modal;
