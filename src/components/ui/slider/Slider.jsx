import React from "react";
import { useState } from "react";
import Right from "../../../assets/icons/Right";
import Left from "../../../assets/icons/Left";
import styles from "./Slider.module.scss";
import image from "../../../assets/images/Image.png";
import SliderItem from "./sliderItem/SliderItem.jsx";
import Carousel from "react-simply-carousel";

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
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className={styles.sliderContainer}>
      <Carousel
        updateOnItemClick
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          },
        }}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          style: {
            background: "blue",
          },
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: ">",
          style: {
            fontSize: "20px",
            padding: "10px",
            width: "40px",
            borderRadius: "50%",
            border: "none",
            alignSelf: "center",
            cursor: "pointer",
          },
        }}
        backwardBtnProps={{
          children: "<",
          style: {
            fontSize: "20px",
            padding: "10px",
            width: "40px",
            borderRadius: "50%",
            border: "none",
            alignSelf: "center",
            cursor: "pointer",
          },
        }}
        itemsToShow={3}
        speed={300}
      >
        {DUMMY_DATA.map((item) => (
          <SliderItem key={item.id} {...item} />
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
