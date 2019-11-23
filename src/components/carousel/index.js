import React, { useState } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import "./style.scss";
import {
  FaChevronRight,
  FaChevronLeft,
  FaLongArrowAltDown
} from "react-icons/fa";
import ImgCard from "./../img_card";

const Carousel = () => {
  const data = [
    {
      img:
        "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_291,h_163/v1570228859/assets/4d/ff1841-da7f-4738-bbe2-09d7ef6d0b36/original/2-Roles_CustService_3.jpg",
      title: "Customer service",
      desc:
        "Help create outstanding customer experiences for businesses in a variety of environments.",
      location: "London",
      time: "one day ago"
    },
    {
      img:
        "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_291,h_163/v1570228859/assets/4d/ff1841-da7f-4738-bbe2-09d7ef6d0b36/original/2-Roles_CustService_3.jpg",
      title: "Customer service",
      desc:
        "Help create outstanding customer experiences for businesses in a variety of environments.",
      location: "London",
      time: "one day ago"
    },
    {
      img:
        "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_291,h_163/v1570228859/assets/4d/ff1841-da7f-4738-bbe2-09d7ef6d0b36/original/2-Roles_CustService_3.jpg",
      title: "Customer service",
      desc:
        "Help create outstanding customer experiences for businesses in a variety of environments.",
      location: "London",
      time: "one day ago"
    },
    {
      img:
        "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_291,h_163/v1570228859/assets/4d/ff1841-da7f-4738-bbe2-09d7ef6d0b36/original/2-Roles_CustService_3.jpg",
      title: "Customer service",
      desc:
        "Help create outstanding customer experiences for businesses in a variety of environments.",
      location: "London",
      time: "one day ago"
    },
    {
      img:
        "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_291,h_163/v1570228859/assets/4d/ff1841-da7f-4738-bbe2-09d7ef6d0b36/original/2-Roles_CustService_3.jpg",
      title: "Customer service",
      desc:
        "Help create outstanding customer experiences for businesses in a variety of environments.",
      location: "London",
      time: "one day ago"
    },
    {
      img:
        "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_291,h_163/v1570228859/assets/4d/ff1841-da7f-4738-bbe2-09d7ef6d0b36/original/2-Roles_CustService_3.jpg",
      title: "Customer service",
      desc:
        "Help create outstanding customer experiences for businesses in a variety of environments.",
      location: "London",
      time: "one day ago"
    },
    {
      img:
        "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_291,h_163/v1570228859/assets/4d/ff1841-da7f-4738-bbe2-09d7ef6d0b36/original/2-Roles_CustService_3.jpg",
      title: "Customer service",
      desc:
        "Help create outstanding customer experiences for businesses in a variety of environments.",
      location: "London",
      time: "one day ago"
    }
  ];
  const [swiper, updateSwiper] = useState(null);
  const swiperParams = {
    spaceBetween: 0,
    slidesPerView: 3,
    pagination: {
      el: ".customized-swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };
  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  return (
    <div className="carousel">
      <Swiper {...swiperParams} getSwiper={updateSwiper}>
        {data.map(item => {
          return <ImgCard {...item}></ImgCard>;
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
