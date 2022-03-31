import React from "react";
import styles from "./Input.module.scss";

function Input({ label, value, onChange, type, placeholder, error, ...props }) {
  return (
    <div className={styles.inputContainer}>
      <label className={error ? styles.errorText : styles.label}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        type={type ? type : "text"}
        placeholder={placeholder}
        {...props}
        className={
          error ? [styles.input, styles.error].join(" ") : styles.input
        }
      />
      {error ? (
        <div className={styles.errorText}>{error}</div>
      ) : (
        <div className={styles.errorText}></div>
      )}
    </div>
  );
}

export default Input;
