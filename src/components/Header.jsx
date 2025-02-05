import { useState } from "react";
import styles from "../css/Header.module.css";
import Modal from "./Modal";

const Header = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className={styles.container}>
        <span className={styles.logo}>Weather App</span>
        <span className={styles.info} onClick={() => setModal((prev) => !prev)}>
          <span className={styles.infoBtn}>ℹ</span>
          Info
        </span>
      </div>
      {modal && <Modal setModal={setModal}></Modal>}
    </>
  );
};

export default Header;
