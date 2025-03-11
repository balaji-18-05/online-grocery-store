import React, { useContext, useState } from "react";
import '../styles/cart.css'
import { CartContext } from "./CartContext";
import MenuAppBar from "../Navbar";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "./Scrolltotop";
export default function Cart() {

  const navigate = useNavigate();

  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
    <div>
    <ScrollToTop/>
      <MenuAppBar></MenuAppBar>
      <div className="cart_heading">
      <img src="/gif/cartgif.gif"></img>
      <h2 > My Cart</h2>
      </div>
      
      {cart.length == 0 ? (
        <p className="cart_empty">
         Your cart is empty!
        </p>
      ) : (
        <>
          <div className="image-container">
            {cart.map((item) => (
              <div key={item.id} className="img-card">
                <img src={item.img} alt={item.name} className="img-main" />
                <div className="content">
                  <h3>{item.name}</h3>
                  <p>₹{`${item.price}`}</p>

                  <p>Discounted from <s>₹{item.oldPrice}</s></p>
                  <p>Quantity:
                    <button onClick={() => decreaseQuantity(item.id)} className="plus_btn">➖</button>
                    {item.quantity}
                    <button onClick={() => increaseQuantity(item.id)} className="plus_btn">➕</button>
                  </p>
                  <button onClick={() => removeFromCart(item.id)} className="btn btn-danger remove-btn">Remove</button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      
    </div>
    
    <div className="proceed_btn">
    <p className="check_sentence">Check the cart before steping into  purchase</p>
    <p className="check_sentence">  Total Cost : ₹{totalAmount}</p>
    <p className="your_orders">Your orders</p>
    <div className='checkout_container'>

    
     
    <ol>
    {cart.map((itr, index) => (
      <div className="purchased_list">
        <p>
        <span className="list_of_items">{index+1}.{itr.name}({itr.quantity})</span>
          <span className="price_on_product">₹{itr.price * itr.quantity}</span>
        </p>
      </div>
     ))}
    </ol>
    {/* <p className="total_on_list">-------------</p> */}
    <p className="total_on_list"> <span id="tot">Total  : </span>₹{totalAmount}</p>

    <p className="payment_sentence">Click the button given below to continue payment.....</p>
      </div>
    <button className="btn btn-danger" onClick={()=>navigate("/Checkoutpage")}>Way to Payment</button>
  </div>
  <Footer/>
  </>
  );
}

