"use client";

import { useSwiper } from "swiper/react";

import { MoveLeft, MoveRight } from "lucide-react";

const SliderButtons = ({ containerStyle, buttonStyles, iconsStyles }) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyle}>
      <button className={buttonStyles}>
        <MoveLeft className={iconsStyles} onClick={() => swiper.slidePrev()} />
      </button>

      <button className={buttonStyles}>
        <MoveRight className={iconsStyles} onClick={() => swiper.slideNext()} />
      </button>
    </div>
  );
};

export default SliderButtons;
