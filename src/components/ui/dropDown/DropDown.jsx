import React from "react";
import { useState } from "react";
import styles from "./DropDown.module.scss";
import Sort from "../../../assets/icons/Sort";
import { useNavigate, useLocation } from "react-router-dom";
function DropDown({ items, defaultItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(defaultItem);
  const [buttonTitle, setButtonTitle] = useState("Order By");
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

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
                navigate(`${ location.pathname + location.search}&orderBy=${item}`);
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
