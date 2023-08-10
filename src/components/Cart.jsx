import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { useContext, useEffect } from "react";
import "../styles/Cart.css";
import EmptyCartIcon from "../assets/PerfumeryEmptyCartIcon.svg";
import truck from "../assets/perfumerycarttruckIcon.svg";
import gift from "../assets/PerfumerycartgiftIcon.svg";
import arrowdown from "../assets/PerfumeryCartArrowdownIcon.svg";
import nairaIcon from "../assets/perfumerynairaIcon.svg";
import CartContext from "../Hooks/CartContext";
import { Link,useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    handleIncrease,
    handleDecrease,
    totalPrice,
    handleRemoveItem,
    loggedIn
  } = useContext(CartContext);
  const navigate = useNavigate()

   useEffect(() => {
     window.scrollTo({
       top: 0,
       behavior: "smooth",
     });
   }, []);
   function handleOrder(){

    
    if(loggedIn){
      navigate('/Order')
      
    }else{

      alert('please signin/signUp first')
    }
    // if(!loggedIn){
    // }
    
   }

  return (
    <div className="basket">
      <Navbar />
      <main className="container">
        <div className="welcome my-4">
          <h1 className="welcome-heading">My Cart</h1>
          <p className="welcome-sub-heading">Welcome back!</p>
        </div>
        <div>
          {cartItems.length === 0 && (
            <div className="empty-cart d-flex flex-column align-items-center justify-content-between my-5 gap-3">
              <img src={EmptyCartIcon} alt="" />
              <p className="fw-bold">Your cart is empty!</p>
              <p className="text-center">
                Browse our categories and discover our best deals
              </p>
              <button className="emptycartbtn shadow-sm">start shopping</button>
            </div>
          )}
        </div>
        {cartItems.length >= 1 && (
          <div className="d-md-flex d-lg-flex justify-content-between">
            <div className="cart">
              <div className="cart-items w-100">
                <div className="d-none d-md-block d-lg-block d-md-flex d-lg-flex justify-content-between align-items-center cart-items-heading p-3">
                  <p className="mb-0">Product</p>
                  <p className="mb-0">Quantity</p>
                  <p className="mb-0">Total</p>
                </div>
                <div>
                  {cartItems.map((cartItem) => {
                    const { image, title, price, _id, quantity } = cartItem;
                    return (
                      <div
                        key={_id}
                        className="cart-item d-flex align-items-center justify-content-between p-3"
                      >
                        <div className="d-flex align-items-center">
                          <img className="cart-img" src={image} alt="" />
                          <p className="cart-img-title">{title}</p>
                        </div>
                        <div className="text-center">
                          <div className="d-flex align-items-center justify-content-between cart-math">
                            <p
                              onClick={() => handleDecrease(cartItem)}
                              className="mb-0 item-decrease"
                            >
                              -
                            </p>
                            <p className="mb-0 cart-math-number">{quantity}</p>
                            <p
                              onClick={() => handleIncrease(cartItem)}
                              className="mb-0 item-increase"
                            >
                              +
                            </p>
                          </div>
                          <p
                            onClick={() => handleRemoveItem(cartItem)}
                            className="remove-btn mb-0"
                          >
                            Remove
                          </p>
                        </div>
                        <div className="d-flex gap-1 align-items-center">
                          <img
                            className="cart-item-price-icon"
                            src={nairaIcon}
                            alt=""
                          />
                          <p className="cart-item-price mb-0">{price}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="my-3 cart-gift w-100 d-flex justify-content-between align-items-center p-4">
                <div className="d-flex gap-3 align-items-center">
                  <img className="giftIcon" src={gift} alt="" />
                  <p className="mb-0">
                    <span className="span">Do you want a gift wrap? </span>
                    <span>
                      Only <img src={nairaIcon} alt="" />
                      1,000
                    </span>
                  </p>
                </div>
                <button className="d-none d-md-block d-lg-block">Add a gift wrap</button>
              </div>
              <div className="my-3 d-flex w-100 justify-content-between align-items-center p-4 cart-shipping">
                <div className="d-flex gap-3 align-items-center">
                  <img className="truckIcon" src={truck} alt="" />
                  <span>Estimate Shipping</span>
                </div>
                <img src={arrowdown} alt="" />
              </div>
            </div>
            <div className="checkout d-flex flex-column gap-4">
              <div className="one d-flex justify-content-between align-items-center pb-2">
                <h6 className="mb-0 total">Total</h6>
                <span className="d-flex align-items-center total-price">
                  <img className="naira-checkout" src={nairaIcon} alt="" />
                  <p className="mb-0">{totalPrice}</p>
                </span>
              </div>
              <div className="two d-flex justify-content-between align-items-center pb-3">
                <p className="mb-0 orders">Orders Instructions</p>
                <img className="ordersIcon" src={arrowdown} alt="" />
              </div>
              <div className="text-center">
                <p className="vat">VAT and shipping calculated at checkout</p>
                <button onClick={handleOrder}>Check Out</button>
                {/* <Link className="btn btn-warning w-100 border rounded-4"  > Check Out </Link> */}
              </div>
            </div>
          </div>
        )}

        <div className="our-guarantees my-5">
          <h3 className="our-guarantees-heading">Our guarantees</h3>
          <div className="guarantees d-lg-flex d-md-flex">
            <div className="one py-5 px-4  text-center">
              <h6>Premium Quality</h6>
              <p>
                Lörem ipsum misadeiliga. Laning homoheten i kontralanat
                tempotos.
              </p>
            </div>
            <div className="two py-5 px-4 text-center">
              <h6>Excellent Customer Support</h6>
              <p>
                Lörem ipsum misadeiliga. Laning homoheten i kontralanat
                tempotos.
              </p>
            </div>
            <div className="three py-5 px-4 text-center">
              <h6>Excellent Customer Support</h6>
              <p>
                Lörem ipsum misadeiliga. Laning homoheten i kontralanat
                tempotos.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
