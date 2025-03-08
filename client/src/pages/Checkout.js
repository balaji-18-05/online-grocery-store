import React from 'react';
import '../styles/checkout.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "./Scrolltotop"
import MenuAppBar from '../Navbar';
export default function Checkoutpage() {
  const navigate = useNavigate();

  const handleSubmit=()=>{
    alert('payment proceeded');
    navigate("/Payment");
  }
  
  return (
    <>
    <ScrollToTop/>
    <MenuAppBar/>
    <h1 className='headingforpayment'>Payment Details</h1>
    <form onSubmit={handleSubmit}>
      <div className='payform'>
        <div className='inputcont'>
          <label>Name : </label><input type='text' placeholder='Enter ur name' required></input>
          <label>Email :</label><input type='email' placeholder='Enter ur mail' required></input>
          <label>phone number  :</label>
          <PhoneInput className="phinp"
          inputProps={{
            name: 'phone',
            required: true,
          }}
          />
          <label>Door number :</label><input  type =' text ' placeholder='Door no.' required></input>
          <label>Street address / Area:</label><input type =' text '  placeholder='Enter ur address' required></input>
          <label>District :</label><input  type =' text ' placeholder='Enter ur District' required></input>
          <label>State :</label><input type =' text '  placeholder='Enter ur state' required></input>
          <label>Pincode :</label><input   type =' text ' placeholder='Enter ur Pincode' required></input>
          <button type='submit'>Proceed</button>
        </div>   
      </div> 
    </form>
    <Footer/>
    </>
  )
}