import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartContext from "../Hooks/CartContext";

const Order = () => {
  const {loggedIn} = useContext(CartContext)
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");
  const PaymentOptions = ["cash", "transfer"];
  const getToken = ()=> {
    const token = localStorage.getItem('token')
    return token

  }
  useEffect (()=>{
    getToken()
  }, [])
  const navigate = useNavigate()
  // console.log(getToken());
 async  function handleOrderSubmit(e) {
    e.preventDefault();
    const orderData = {
        firstname,
        lastname,
        mobile,
        address, 
        paymentMode: payment
      }
    // console.log(1234);
  try {
   let {data} = await axios.post('http://localhost:7878/order/create',orderData, {
    headers:{
      'Authorization': getToken()
    }
   });
  //  console.log(res);
    if(data.token){
        localStorage.setItem('token', data.token)
        alert('logged in')
        // navigate away
        navigate('/SignIn')
      }
    
  } catch (error) {
    if(error){
      alert(error.response.data.errMessage)
      return
    }
    console.log(error);
    
  }
  }
  return (
    <div className="container">
      {loggedIn ? <div className="d-flex justify-content-center align-items-center flex-column">
        <Link to='/' className="btn btn-primary">Home</Link>
        <h2>order</h2>
        <form action="">
          <label htmlFor="firstname">firstname:</label>
          <br />
          <input type="text" id="firstname" value={firstname} onChange={(e)=>setFirstName(e.target.value)}/>
          <br />
          <br />
          <label htmlFor="lastname">lastname:</label>
          <br />
          <input type="text" id="lastname" value={lastname} onChange={(e)=>setLastName(e.target.value)}/>
          <br />
          <br />
          <label htmlFor="mobile">mobile:</label>
          <br />
          <input type="number" id="mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)} />
          <br />
          <br />
          <label htmlFor="address">Address:</label>
          <br />
          <input type="text" id="address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
          <br />
          <br />
          <label htmlFor="">payment mode:</label>
          <select name="" id="" onChange={(e) => {
              setPayment(e.target.value);
            }}>
            {PaymentOptions.map((singleOption) => {
              return (
            
                  <option key={singleOption} value={singleOption} className="form-select">
                   {singleOption}
                  </option>
                
              );
            })}
            {/* <option value="cash">cash</option>
            <option value="">transfer</option> */}
          </select>
          <br />
          <br />
          <button className="btn btn-primary" onClick={handleOrderSubmit}>
            submit
          </button>
        </form>
      </div> : alert('unauathorized') }
     
    </div>
  );
};

export default Order;
