import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarouselA from './CarouselA';
import CarouselB from './CarouselB';
import CarouselC from './CarouselC';
import CarouselD from './CarouselD';
import { Leftdouble } from '../../../../assets/svgs/Leftdouble';
import { Rightdouble } from '../../../../assets/svgs/Rightdouble';

const CarouselSlick = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Leftdouble />,
    prevArrow: <Rightdouble />,
    customPaging: (i) => <CustomDot onClick={() => goToSlide(i)} />,
  };

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  const NextArrow = ({ onClick }) => (
    <button className="slick-next" onClick={onClick}>
      Next
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button className="slick-prev" onClick={onClick}>
      Prev
    </button>
  );

  const CustomDot = ({ onClick }) => (
    <button className="slick-dot" onClick={onClick}>
      Dot
    </button>
  );

  return (
    <Slider {...settings} ref={sliderRef}>
      <div>
        <CarouselA />
      </div>
      <div>
        <CarouselB />
      </div>
      <div>
        <CarouselC />
      </div>
      <div>
        <CarouselD />
      </div>
    </Slider>
  );
};

export default CarouselSlick;
