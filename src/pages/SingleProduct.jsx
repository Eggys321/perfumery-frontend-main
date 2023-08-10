import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import UseFetch from "../Hooks/UseFetch";
import { useParams } from "react-router-dom";
import truck from "../assets/PerfumeryHeroTruck.svg";
import deliverySpeed from "../assets/PerfumeryHeroSpeed.svg";
import payment from "../assets/PerfumeryHeroPay.svg";
import priceIcon from "../assets/PerfumeryHeroPrice.svg";
import "../styles/SingleProduct.css";
import SimilarItems from "../components/SimilarItems";
import { useContext, useEffect } from "react";
import CartContext from "../Hooks/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleProduct = () => {
  const { handleAddToCart } = useContext(CartContext);
  const { id } = useParams();
  const { data: data1 } = UseFetch(
    `https://perfumery.onrender.com/perfumes/singlePerfume/${id}`
  );
  const { image, title, description, price, category } = data1;

  const notify = () => {
    toast.success("An item has been added !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="d-md-flex d-lg-flex gap-4 my-5 mycontainer justify-content-between">
        <div className="div-one rounded py-5">
          <img className="img-fluid w-100 singleprod-img" src={image} alt="" />
        </div>
        <div className="div-two rounded">
          <div className="one">
            <h1 className="product-name">Product Name</h1>
            <p className="product-title">{title}</p>
          </div>
          <div className="two">
            <h1 className="product-desc-heading">Description</h1>
            <p className="product-desc">{description}</p>
          </div>
          <div className="three">
            <h6 className="product-price-heading">Price</h6>
            <p className="product-price">N{price}</p>
          </div>
          <div className="four d-flex gap-2 mt-5">
            <button className="product-shop">Shop Now</button>
            <button
              onClick={() => {
                handleAddToCart(data1);
                notify();
              }}
              className="product-add"
            >
              Add to Cart
            </button>
            <ToastContainer />
          </div>
        </div>
        <div className="div-three rounded d-none d-lg-block d-lg-flex flex-column gap-5">
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
      <SimilarItems category={category} titles="All of you" />
      <Footer />
    </div>
  );
};

export default SingleProduct;
