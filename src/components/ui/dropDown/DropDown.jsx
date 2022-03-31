import React from "react";
import { useState } from "react";
import styles from "./DropDown.module.scss";
import Sort from "../../../assets/icons/Sort";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSort } from "../../../redux/slice";
function DropDown({ items, defaultItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(defaultItem);
  const [buttonTitle, setButtonTitle] = useState("Order By");
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
                dispatch(setSort(item));
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
