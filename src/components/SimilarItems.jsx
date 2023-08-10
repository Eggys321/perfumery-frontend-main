import "../styles/SimilarItems.css";
import UseFetch from "../Hooks/UseFetch";
import heartIcon from "../assets/PerfumeryHeartIcon.svg";
import arrowIcon from "../assets/PerfumeryArrowIcon.svg";
import nairaIcon from "../assets/perfumerynairaIcon.svg";
import { Link } from "react-router-dom";
import fiveStar from "../assets/Perfumery5starIcon.svg";
import cart from "../assets/PerfumeryCart.svg";
import ClipLoader from "react-spinners/ClipLoader";

const SimilarItems = ({ category }) => {
  const { data, loading, error } = UseFetch(
    `https://perfumery.onrender.com/perfumes/category/${category}`
  );

  console.log(category);
  console.log(data);

  return (
    <div className="mycontainer">
      <div className="bg-white">
        <div className="p-3 d-flex justify-content-between">
          <div className="d-flex gap-2">
            <h5 className="male-heading">Other products you might like</h5>
            {loading && <ClipLoader color={"red"} size={50} />}
            {error && <h2>{error.message}</h2>}
          </div>
          <div className="d-flex gap-2 align-items-center view-more">
            <p className="mb-0">View more</p>
            <img className="arrow-icon" src={arrowIcon} alt="" />
          </div>
        </div>
        <div className="my-4 py-3 px-4 male-section similar">
          {data.map((datum) => {
            const { image, title, label, price, _id } = datum;
            return (
              <div
                key={_id}
                className=" border rounded p-2 product new m-auto shadow-sm"
              >
                <div className="img">
                  <Link to={`/SingleProduct/${_id}`}>
                    <img className="img-fluid product-img" src={image} alt="" />
                  </Link>
                  <img className="heart-icon" src={heartIcon} alt="" />
                </div>
                <div className="body d-flex flex-column gap-3 p-2">
                  <div className="mt-3">
                    <p className="product-title mb-0">{title}</p>
                    <p className="product-label mb-0">{label}</p>
                  </div>
                  <div className="d-flex align-items-center gap-1">
                    <img
                      className="product-price-icon"
                      src={nairaIcon}
                      alt=""
                    />
                    <p className="product-price mb-0">{price}</p>
                  </div>
                  <span className="d-flex gap-5 align-items-center">
                    <img src={fiveStar} alt="" />
                    <p className="mb-0 product-review">50 reviews</p>
                  </span>
                  <span className="d-none d-md-block d-lg-block d-md-flex d-lg-flex justify-content-between align-items-center mt-1">
                    <button className="similar-btn">Buy Now</button>
                    <img src={cart} alt="" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SimilarItems;
