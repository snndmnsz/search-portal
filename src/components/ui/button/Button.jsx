import React from "react";
import styles from "./Button.module.scss";
function Button({ title, onClick, style }) {
  return (
    <button className={styles.button} style={style} onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;
