import React from "react";
import styles from "./Toast.module.scss";
import Close from "../../../assets/icons/Close";
function Toast({ message, header, onClose, type = "Error", isVisible }) {
  return (
    <div className={isVisible ? styles.toastContainer : styles.displayNone}>
      <div className={styles.toastheader} onClick={onClose}>
        <div className={styles.type}>{type}</div>
        <button onClick={onClose} className={styles.button}>
          <Close />
        </button>
      </div>
      <div className={styles.toastInfo}>
        <div className={styles.toastHeader}>{header}</div>
        <div className={styles.toastMessage}>{message}</div>
      </div>
    </div>
  );
}

export default Toast;
