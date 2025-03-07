import React from 'react'
import '../checkout.css'
export default function Checkoutpage() {
  return (
    <>
    <h1 className='headingforpayment'>Payment </h1>
    <div className='payform'>
      <div className='inputcont'>
      <label>Name : </label><input placeholder='Enter ur name'></input>
      <label>Email :</label><input placeholder='Enter ur mail'></input>
      <label>phone number  :</label><input placeholder='Enter ur phone number'></input>
      <label>Door number :</label><input placeholder='Door no.'></input>
      <label>Street address / Area:</label><input placeholder='Enter ur address'></input>
      <label>District :</label><input placeholder='Enter ur District'></input>
      <label>State :</label><input placeholder='Enter ur state'></input>
      <label>Pincode :</label><input placeholder='Enter ur Pincode'></input>
      <button className='success-btn'>Proceed</button>
      </div>   
    </div> 
    </>
  )
}