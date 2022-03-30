import React from "react";
import Right from "../../../assets/icons/Right";
import Left from "../../../assets/icons/Left";
import styles from "./Slider.module.scss";
import image from "../../../assets/images/Image.png"
import SliderItem from "./sliderItem/SliderItem.jsx";

const DUMMY_DATA = [
  {
    id: 1,
    title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
    time: "1h ago",
    author: "Troy Corlson",
    image: image,
  },
  {
    id: 2,
    title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
    time: "1h ago",
    author: "Troy Corlson",
    image: image,
  },
  {
    id: 3,
    title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
    time: "1h ago",
    author: "Troy Corlson",
    image: image,
  },
  {
    id: 4,
    title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
    time: "1h ago",
    author: "Troy Corlson",
    image: image,
  },
  {
    id: 5,
    title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
    time: "1h ago",
    author: "Troy Corlson",
    image: image,
  },
];

function Slider() {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.button}>
        <Left />
      </div>
      <div className={styles.slider}>
        {DUMMY_DATA.map((item) => (
          <SliderItem key={item.id} {...item} />
        ))}
      </div>
      <div className={styles.button}>
        <Right />
      </div>
    </div>
  );
}

export default Slider;
