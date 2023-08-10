import "../styles/Hero.css";
import truck from "../assets/PerfumeryHeroTruck.svg";
import deliverySpeed from "../assets/PerfumeryHeroSpeed.svg";
import payment from "../assets/PerfumeryHeroPay.svg";
import priceIcon from "../assets/PerfumeryHeroPrice.svg";
import searchIcon from "../assets/material-symbols_search-rounded.svg";
import { Link } from "react-router-dom";
import image1 from "../assets/perfumeryBannerImg1.svg";
import image2 from "../assets/perfumeryBannerImg2.svg";
import image3 from "../assets/PerfumeryBannerImg3.svg";
import image4 from "../assets/PerfumeryBannerImg4.svg";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Data from "../components/DB";

const renderSlides = Data.map((datum) => {
  const { id, name, img } = datum;
  return (
    <div
      key={id}
      className="row align-items-center justify-content-between p-lg-3 renderSlides"
    >
      <div className="col-sm-5 col-lg-6 col-md-6">
        <h1 className="carousel-heading">Best Selling</h1>
        <p className="carousel-name">{name}</p>
        <button className="carousel-btn">Shop Now</button>
      </div>
      <div className="col-sm-7 col-lg-6 col-md-6">
        <img src={img} alt="" />
      </div>
    </div>
  );
});

const Hero = () => {
  const [hidden, setHidden] = useState(true);
  const [hidden2, setHidden2] = useState(true);
  const [hidden3, setHidden3] = useState(true);
  const [hidden4, setHidden4] = useState(true);

  const handleHidden = () => {
    setHidden(!hidden);
  };

  const handleHidden2 = () => {
    setHidden2(!hidden2);
  };
  const handleHidden3 = () => {
    setHidden3(!hidden3);
  };
  const handleHidden4 = () => {
    setHidden4(!hidden4);
  };

  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }

  return (
    <div className="hero pt-2 pb-3">
      <div className="container w-100 d-flex d-md-none d-lg-none search-div bg-white my-3">
        <img className="searchIcon" src={searchIcon} alt="" />
        <input
          type="text"
          className="w-100 px-5"
          placeholder="Search products, brands and categories"
        />
      </div>
      <div className="container hero-banner row h-50 m-auto">
        <div className=" col-lg-2 bg-white content p-0 rounded d-none d-md-none d-lg-block">
          <h3 className="text-center banner-heading">Categories</h3>
          <ul className="text-center p-0 d-flex flex-column banner-list">
            <li className="list-unstyled">
              <Link className="fw-bold text-decoration-none">All</Link>
            </li>
            <li className="list-unstyled">
              <Link className="text-decoration-none ">Male</Link>
            </li>
            <li className="list-unstyled">
              <Link className="text-decoration-none ">Female</Link>
            </li>
            <li className="list-unstyled">
              <Link className="text-decoration-none ">Combo Packages</Link>
            </li>
            <li className="list-unstyled">
              <Link className="text-decoration-none ">Designers Perfume</Link>
            </li>
            <li className="list-unstyled">
              <Link className="text-decoration-none ">Scented Candles</Link>
            </li>
            <li className="list-unstyled">
              <Link className="text-decoration-none ">Reeds & Diffusers</Link>
            </li>
            <li className="list-unstyled">
              <Link className="text-decoration-none ">Sprays</Link>
            </li>
          </ul>
        </div>
        <div className="rounded col-lg-7 bg-white content">
          <Carousel
            showThumbs={false}
            showArrows={false}
            autoPlay={true}
            infiniteLoop={true}
            selectedItem={Data[currentIndex]}
            onChange={handleChange}
            className="carousel-container"
          >
            {renderSlides}
          </Carousel>
        </div>
        <div className="border col-lg-3 content banner-images p-0 d-none d-md-none d-lg-grid">
          <div
            onMouseEnter={handleHidden}
            onMouseLeave={handleHidden}
            className={hidden ? "hide" : null}
          >
            <img className="img-fluid bg-white" src={image1} alt="dd" />
            <button className="btn1">30% Off</button>
            <button className="btn2">Shop Now</button>
          </div>
          <div
            onMouseEnter={handleHidden2}
            onMouseLeave={handleHidden2}
            className={hidden2 ? "hide" : null}
          >
            <img className="img-fluid bg-white" src={image2} alt="cc" />
            <button className="btn1">30% Off</button>
            <button className="btn2">Shop Now</button>
          </div>
          <div
            onMouseEnter={handleHidden3}
            onMouseLeave={handleHidden3}
            className={hidden3 ? "hide" : null}
          >
            <img className="img-fluid bg-white" src={image3} alt="ee" />
            <button className="btn1">30% Off</button>
            <button className="btn2">Shop Now</button>
          </div>
          <div
            onMouseEnter={handleHidden4}
            onMouseLeave={handleHidden4}
            className={hidden4 ? "hide" : null}
          >
            <img className="img-fluid bg-white" src={image4} alt="ff" />
            <button className="btn1">30% Off</button>
            <button className="btn2">Shop Now</button>
          </div>
        </div>
      </div>
      <div className="container d-none d-lg-block my-5 d-lg-flex justify-content-between">
        <div className="d-flex align-items-center gap-3">
          <img src={truck} alt="" />
          <div className="">
            <p className="font-w-bold">Nationwide Delivery</p>
            <p>Anywhere Anytime</p>
          </div>
        </div>
        <div className="d-flex align-items-center gap-3">
          <img src={deliverySpeed} alt="" />
          <div>
            <p className="font-w-bold">Same Day Delivery</p>
            <p>In Lagos Only</p>
          </div>
        </div>
        <div className="d-flex align-items-center gap-3">
          <img src={payment} alt="" />
          <div>
            <p className="font-w-bold">Pay On Delivery</p>
            <p>In Lagos Only</p>
          </div>
        </div>
        <div className="d-flex align-items-center gap-3">
          <img src={priceIcon} alt="" />
          <div>
            <p className="font-w-bold">Lowest Price</p>
            <p>Best Deals</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
