import React, { useContext, useState } from "react";
import MenuAppBar from "../Navbar";
import Footer from "../Footer";
import { CartContext } from "./CartContext";
import '../cart.css'
import ScrollToTop from "./Scrolltotop";
export default function Vegetables() {
  const { addToCart, increaseQuantity, decreaseQuantity, cart } = useContext(CartContext);

  const Vegetables = [
    { id: 120, img: "/vegetables/banana stem.jpg", name: "Banana stem", price: 150, oldPrice: 200 },
    { id: 121, img: "/vegetables/beans.jpg", name: "Beans", price: 50, oldPrice: 80 },
    { id: 122, img: "/vegetables/beetroot.jpg", name: "Beetroot", price: 50, oldPrice: 80 },
    { id: 123, img: "/vegetables/brinjal.jpg", name: "Brinjal", price: 110, oldPrice: 140 },
    { id: 124, img: "/vegetables/cabbage.jpg", name: "Cabbage", price: 50, oldPrice: 70 },
    { id: 125, img: "/vegetables/carrot.jpg", name: "carrot", price: 100, oldPrice: 110 },
    { id: 126, img: "/vegetables/green-banana.jpg", name: "Raw-banana", price: 5, oldPrice: 10 },
    { id: 127, img: "/vegetables/onion.jpg", name: " Big Onion", price: 50, oldPrice: 60 },
    { id: 128, img: "/vegetables/potato.jpg", name: "Potato", price: 50, oldPrice: 60 },
    { id: 129, img: "/vegetables/pumpkin.jpg", name: "Pumpkin", price: 150, oldPrice: 170 },
    { id: 130, img: "/vegetables/radish.jpg", name: "Radish", price: 180, oldPrice: 200 },
    { id: 131, img: "/vegetables/small onion.jpg", name: "sunflower", price: 120, oldPrice: 160 },
    { id: 132, img: "/vegetables/tomato.jpg", name: "Tomato", price: 50, oldPrice: 10 },
  ];

  const [isPopupVisible, setIsPopupVisible] = useState("");

  const handleAddToCart = (vege) => {
    addToCart(vege);
    setIsPopupVisible(vege.name);
    setTimeout(() => setIsPopupVisible(""), 1500);
  };

  return (
    <>
    <ScrollToTop/>
      <MenuAppBar />
      <h1 className="heading" >Vegetables : </h1>
      <div className="image-container">
        {Vegetables.map((vege) => {
          const cartItem = cart.find((item) => item.id === vege.id);
          return (
            <div key={vege.id} className="img-card">
              <img src={vege.img} alt={vege.name} className="img-main" />
              <div className="content">

              <p>{vege.name}</p>
              <p>₹{ `${vege.price}/kg`}</p>
              <p>Discounted from <s>₹{vege.oldPrice}</s></p>
              
              {cartItem ? (
                <div>
                  Quantity : 
                  <span className="quan">{cartItem.quantity}</span>
                  <button onClick={() => decreaseQuantity(vege.id)} className="plus_btn">➖</button>
                  <button onClick={() => increaseQuantity(vege.id)} className="plus_btn">➕</button>
                  </div>
              ) : (
                <button onClick={() => handleAddToCart(vege)} className="cartbtn">
                  Add to cart
                </button>
              )}
              </div>

              {isPopupVisible === vege.name && <div style={popupStyle}>{vege.name} added to cart</div>}
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

const popupStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "20px",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  color: "white",
  borderRadius: "8px",
  textAlign: "center",
};
