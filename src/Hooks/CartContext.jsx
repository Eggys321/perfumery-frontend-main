import { createContext, useState, useEffect } from "react";

import axios from "axios";

const CartContext = createContext();


const cartItemsFromLocalStorage =
  JSON.parse(localStorage.getItem("cartItems")) || [];

export const CartProvider = ({ children }) => {
  const [loggedIn,setLoggedIn] = useState(undefined)
  const token = localStorage.getItem('token')
  //console.log(token);
  async function getLoggedIn (){
    const loggedInRes = await axios.get('https://perfumery-backend-api-auth.onrender.com/auth/loggedIn', {
      headers: {
        'Authorization': token
      }
    })
    console.log(loggedInRes.data);
    setLoggedIn(loggedInRes.data)
    
  }

  const logout = ()=>{
    localStorage.removeItem('token')
    setLoggedIn(false)
  }

  const [cartItems, setCartItems] = useState(cartItemsFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    getLoggedIn()
  }, [cartItems]);

  const handleAddToCart = (product) => {
    const selectedItem = cartItems.find((item) => item._id === product._id);
    if (selectedItem) {
      setCartItems(
        cartItems.map((singleItem) => {
          return singleItem._id === product._id
            ? { ...selectedItem, quantity: selectedItem.quantity + 1 }
            : singleItem;
        })
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    console.log(cartItems);
  };

  const handleIncrease = (product) => {
    const selectedItem = cartItems.find((item) => item._id === product._id);
    if (selectedItem) {
      setCartItems(
        cartItems.map((singleItem) =>
          singleItem._id === product._id
            ? { ...selectedItem, quantity: selectedItem.quantity + 1 }
            : singleItem
        )
      );
    }
  };

  const handleDecrease = (product) => {
    const selectedItem = cartItems.find((item) => item._id === product._id);
    if (selectedItem.quantity === 1) {
      setCartItems(
        cartItems.filter((oneItem) => oneItem._id !== selectedItem._id)
      );
    } else {
      setCartItems(
        cartItems.map((singleItem) =>
          singleItem._id === product._id
            ? { ...selectedItem, quantity: selectedItem.quantity - 1 }
            : singleItem
        )
      );
    }
  };

  const handleRemoveItem = (product) => {
    setCartItems(cartItems.filter((oneItem) => oneItem._id !== product._id));
  };

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  // let total = 0;
  // const totalPrice = cartItems.forEach((item) => {
  //   return total += item.price * item.quantity;
  // });

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        handleAddToCart,
        handleIncrease,
        handleDecrease,
        handleRemoveItem,
        totalPrice,
        loggedIn,
        getLoggedIn,
        logout,
        setLoggedIn

      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
