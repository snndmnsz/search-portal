import React from "react";
import { useState } from "react";
import styles from "./DropDown.module.scss";
import Sort from "../../../assets/icons/Sort";
function DropDown({ items, defaultItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(defaultItem);
  const [buttonTitle, setButtonTitle] = useState("Order By");

  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={styles.button}
      >
        <Sort />
        {buttonTitle}
      </button>

      {isOpen && (
        <div className={styles.items}>
          {items.map((item) => (
            <div
              onClick={() => {
                setSelectedItem(item);
                setButtonTitle(item);
                setIsOpen(false);
              }}
              key={item}
              className={styles.item}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDown;
