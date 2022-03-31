import React from "react";
import styles from "./Button.module.scss";
function Button({ title, onClick, type, style, ...props }) {
  return (
    <button
      className={styles.button}
      type={type ? type : "button"}
      style={style}
      onClick={onClick}
      {...props}
    >
      {title}
    </button>
  );
}

export default Button;
