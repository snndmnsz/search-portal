import React from "react";
import styles from "./Button.module.scss";
function Button({ title, onClick, type, style }) {
  return (
    <button
      className={styles.button}
      type={type ? type : "button"}
      style={style}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;
