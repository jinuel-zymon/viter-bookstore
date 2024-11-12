import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { imgPath } from '../../helpers/functions-general';

const AdSlider = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button className='hidden' onClick={onClick}>

      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button className='hidden' onClick={onClick}>

      </button>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className='py-6 bg-[#F4F1EA]'>

    <div className="container">
      <Slider {...settings} className='relative'>
          <img src={`${imgPath}/ad-1.jpg`} alt="" className="w-full h-[350px] object-cover rounded-md"/>
          <img src={`${imgPath}/ad-2.jpg`} alt="" className="w-full h-[350px] object-cover rounded-md"/>
          <img src={`${imgPath}/ad-4.jpg`} alt="" className="w-full h-[350px] object-cover rounded-md"/>
      </Slider>
    </div>
    </section>
  );
}

export default AdSlider