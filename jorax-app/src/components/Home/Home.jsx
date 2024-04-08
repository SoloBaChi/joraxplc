import React from "react";
// import { Link } from "react-router-dom";
// import { Carousel } from "react-responsive-carousel";
// import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import HeroContents from "./HeroContents";
import SlideContainer from "./SlideContainer";
import Services from "./Services";
import WhyUs from "./WhyUs";
import PartnerWithUs from "./PartnerWithUs";
import Testimonial from "./Testimonial";


const Home = (props) => {
  return (
    <>
    <HeroContents/>
    <SlideContainer/>
    <Services/>
    <WhyUs/>
    <PartnerWithUs/>
    <Testimonial/>
    </>
  );
};
export default Home;
