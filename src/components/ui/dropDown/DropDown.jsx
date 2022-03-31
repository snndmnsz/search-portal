import React from "react";
import { useState } from "react";
import styles from "./DropDown.module.scss";
import Sort from "../../../assets/icons/Sort";
function DropDown({ items }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  console.log(selectedItem);

  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={styles.button}
      >
        <Sort />
        Order By
      </button>

      {isOpen && (
        <div className={styles.items}>
          {items.map((item) => (
            <div
              onClick={() => {
                setSelectedItem(item);
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
