import React from "react";
import Slider from "react-slick";
import CarouselData from "./CarouselData";

function SlideCard(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    appendDots: (dots) => {
      return <ul style={{ margin: "-30px" }}>{dots}</ul>;
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="card-container slider-container">
        <Slider {...settings}>
          {CarouselData.map((val, index) => (
            <figure className="card" key={index}>
              <div className="img-container">
                <img src={val.imgSrc} alt="carousel item" />
              </div>
              <p className="text-badge">{val.placeHolder}</p>
            </figure>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default SlideCard;
