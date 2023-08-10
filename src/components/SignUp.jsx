import { useState } from "react";
import NavbarAccent from "../layouts/NavbarAccent";
import "../styles/SignUp.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import eyeclose from "../assets/eye-close.svg";
import eyeopen from "../assets/eye-open.svg";

const SignUp = () => {
  const [email,setEmail] = useState('')
  const [firstname,setfirstname] = useState('')
  const [lastname,setlastname] = useState('')
  const [password,setpassword] = useState('')
  const [passwordVerify,setpasswordVerify] = useState('')
  const navigate = useNavigate()

 async function Register(e){
  e.preventDefault()
  // console.log(12);
  try {
    const regData = {
      email,
      firstname,
      lastname,
      password,
      passwordVerify
    }

  //   const res = await fetch('http://localhost:7878/auth/register',{method:"POST",
  //   headers:{
  //     "Content-type":"application/json"
  //   },
  //   body:JSON.stringify(regData)
  // })
  // const data = await res.json();
  // console.log(data);
    // if(   !email ||
    //   !firstname ||
    //   !lastname ||
    //   !password ||
    //   !passwordVerify ){
    //     alert('please fill all fields')

    // }
    // if(  email ||
    //   firstname ||
    //   lastname ||
    //   password ||
    //   passwordVerify ){
    //     alert('registeration completed')

    // }

   const {data} =  await axios.post('https://perfumery-backend-api-auth.onrender.com/auth/register',regData)
  //  navigate('/signIn')
  //  console.log(res);
  console.log(data);
   if(data.token){
    localStorage.setItem('token', data.token)
    alert('registration completed')
    // navigate away
    navigate('/SignIn')
  }
   // if(res.token) // localstrogare,setitem(;token, t) navigate 
  //  if(password.length < 6){
  //   // alert(errMsg)
  //   console.log(response.data.errMsg);
  //  }
  //  if(   !email ||
  //   !firstname ||
  //   !lastname ||
  //   !password ||
  //   !passwordVerify ){
  //     // alert(errMsg)
  //     console.log(response.data.errMsg);

  // }
  } catch (error) {
    if(error){
      alert(error.response.data.errMsg)
      return
    }
    console.log(error);
    
  }
  

  }



  return (
    <div className="container">
      <NavbarAccent />
      <form className="w-50 m-auto" >
        <label htmlFor="email">Email:</label><br />
        <input onChange={(e)=> setEmail(e.target.value) } value={email} className="w-100 rounded-pill border border-2 border-success" type="email" name="" id="email" /><br /><br />
        <label htmlFor="firstname">Firstname:</label><br />
        <input onChange={(e)=> setfirstname(e.target.value) }  value={firstname} className="w-100 rounded-pill border border-2 border-success"  type="text" name="" id="firstname" /><br /><br />
        <label htmlFor="lastname">Lastname:</label><br />
        <input onChange={(e)=> setlastname(e.target.value) }  value={lastname} className="w-100 rounded-pill border border-2 border-success"  type="text" name="" id="lastname" /><br /><br />
        <label htmlFor="password">Password:</label><br />
        <input onChange={(e)=> setpassword(e.target.value) }  value={password} className="w-100 rounded-pill border border-2 border-success"  type="password" name="" id="password" /><br /><br />
        <label htmlFor="Verifypassword">Verify password:</label><br />
        <input onChange={(e)=> setpasswordVerify(e.target.value) }  value={passwordVerify} className="w-100 rounded-pill border border-2 border-success"  type="password" name="" id="Verifypassword" /><br /><br />
        <input className="btn btn-primary" type="submit" value="Register" onClick={Register}/>
      </form>

    </div>
  );
};

export default SignUp;
