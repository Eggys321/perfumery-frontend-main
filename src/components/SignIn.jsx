import "../styles/SignIn.css";
import NavbarAccent from "../layouts/NavbarAccent";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import eyeclose from "../assets/eye-close.svg";
import eyeopen from "../assets/eye-open.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CartContext from "../Hooks/CartContext";

const SignIn = () => {
  const {setLoggedIn} = useContext(CartContext)
  const [email,setEmail] = useState('')
  const [password,setpassword] = useState('')
  const navigate = useNavigate()
  // http://localhost:7878/auth/login

  const Login = async (e)=>{
    e.preventDefault()
    const logData = {
      email,
      password,
    }

    // if( !email || !password ){
    //     alert('please fill all fields')
    //   }
    // if(  email ||password ){
    //     alert('logged in')

    // }
    try {
      const {data} =  await axios.post('http://localhost:7878/auth/login',logData)
    console.log(data);
        // navigate('/')
        // localStorage.setItem({'token' : })
    
      //console.log(data);
      if(data.token){
        localStorage.setItem('token', data.token)
        alert('logged in')
        // navigate away
        navigate('/')
        setLoggedIn(true)
      }
      // window.location.reload()
      
    } catch (error) {
      if(error){
        alert(error.response.data.errMsg)
        return
      }
      console.log(error);
      
    }

  }
  return (
    <div>
      <NavbarAccent />
      <form className="w-50 m-auto" >
        <label htmlFor="email">Email:</label><br />
        <input onChange={(e)=> setEmail(e.target.value) } value={email} className="w-100 rounded-pill border border-2 border-success" type="email" name="" id="email" /><br /><br />
        <label htmlFor="password">Password:</label><br />
        <input onChange={(e)=> setpassword(e.target.value) }  value={password} className="w-100 rounded-pill border border-2 border-success"  type="password" name="" id="password" /><br /><br />
      
        <input className="btn btn-primary" type="submit" value="Login" onClick={Login}/>
      </form>
  
    </div>
  );
};

export default SignIn;
