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
  {
    id: 6,
    title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
    time: "1h ago",
    author: "Troy Corlson",
    image: image,
  },
  {
    id: 7,
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
            fontSize: "23px",
            marginLeft: "10px",
            padding: "10px",
            minWidth: 47,
            minHeight: 40,
            borderRadius: "50%",
            border: "none",
            alignSelf: "center",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
        backwardBtnProps={{
          children: "<",
          style: {
            fontSize: "23px",
            marginRight: "10px",
            padding: "10px",
            minWidth: 47,
            minHeight: 40,
            borderRadius: "50%",
            border: "none",
            alignSelf: "center",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
        itemsToShow={4}
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
