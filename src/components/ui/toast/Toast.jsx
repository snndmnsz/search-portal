import React from "react";
import styles from "./Toast.module.scss";

function Toast({ message, header, onClose, type = "error" }) {
  return (
    <div>
      <div className={styles.toast}>
        <div className={styles.type}>{type}</div>
        <div className={styles.toastHeader}>{header}</div>
        <div className={styles.toastMessage}>{message}</div>
      </div>
      <div className={styles.toastClose} onClick={onClose}>
        <div className={styles.toastCloseIcon}>x</div>
      </div>
    </div>
  );
}

export default Toast;
