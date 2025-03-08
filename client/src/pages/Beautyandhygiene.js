import React, { useContext, useState } from "react";
import MenuAppBar from "../Navbar";
import Footer from "../Footer";
import { CartContext } from "./CartContext";
import ScrollToTop from "./Scrolltotop"
import '../styles/cart.css'
export default function Beautyandhygiene() {
  const { addToCart, increaseQuantity, decreaseQuantity, cart } = useContext(CartContext);
 
  const Beautyandhygiene = [
    { id: 13, img: "/beautyandhygiene/Anti dandruff Shampoo.webp", name: "Anti dandruff Shampoo", price: 150, oldPrice: 200 },
    { id: 14, img: "/beautyandhygiene/Head and shoulders shampoo.jpg", name: "Head and shoulders shampoo", price: 50, oldPrice: 80 },
    { id: 15, img: "/beautyandhygiene/Axe signature Talc.jpg", name: "Axe signature Talc", price: 120, oldPrice: 160 },
    { id: 16, img: "/beautyandhygiene/SpinzBBFaceTalc.jpg", name: "Spinz BB face Talc", price: 110, oldPrice: 140 },
    { id: 17, img: "/beautyandhygiene/Shower to Shower.webp", name: "Shower to Shower", price: 50, oldPrice: 70 },
    { id: 18, img: "/beautyandhygiene/Wild stone.webp", name: "Wild stone", price: 150, oldPrice: 190 },
    { id: 19, img: "/beautyandhygiene/Fogg.webp", name: "Fogg perfume", price: 5, oldPrice: 10 },
    { id: 20, img: "/beautyandhygiene/Dove soap.jpeg", name: "Dove soap", price: 50, oldPrice: 10 },
    { id: 21, img: "/beautyandhygiene/Hamam soap.jpg", name: "Hamam soap", price: 70, oldPrice: 90 },
    { id: 22, img: "/beautyandhygiene/Santoor soap.webp", name: "Santoor soap", price: 150, oldPrice: 170 },
    { id: 23, img: "/beautyandhygiene/Beard face wash.webp", name: "Beard face wash", price: 180, oldPrice: 200 },
    { id: 24, img: "/beautyandhygiene/Himalaya neem face wash.webp", name: "Himalaya neem face wash", price: 50, oldPrice: 60 },
    { id: 25, img: "/beautyandhygiene/Himalaya vitamin -c face wash.webp", name: "Himalya vitamin -c face wash", price: 50, oldPrice: 60 },
    { id: 26, img: "/beautyandhygiene/Body lotion.jpg", name: "Body lotion", price: 50, oldPrice: 60 },
    { id: 27, img: "/beautyandhygiene/Dettol.jpg", name: "Dettol ", price: 50, oldPrice: 60 },
    { id: 28, img: "/beautyandhygiene/Mouth wash.webp", name: "Mouth wash", price: 50, oldPrice: 60 },
    { id: 29, img: "/beautyandhygiene/pampers.webp", name: "pampers", price: 50, oldPrice: 60 },
  ];

  const [isPopupVisible, setIsPopupVisible] = useState("");

  const handleAddToCart = (beauty) => {
    addToCart(beauty);
    setIsPopupVisible(beauty.name);
    setTimeout(() => setIsPopupVisible(""), 1500);
  };
 
  return (
    <>
    <ScrollToTop/>
      <MenuAppBar/>
      <h1 className="heading" > Beauty and hygiene :</h1>
      <div className="image-container">
        {Beautyandhygiene.map((beauty) => {
          const cartItem = cart.find((item) => item.id === beauty.id);
          return (
            <div key={beauty.id} className="img-card">
              <img src={beauty.img} alt={beauty.name} className="img-main" />
              <div className="content">

              <p>{beauty.name}</p>
              <p>₹{`${beauty.price}/kg`}</p>
              <p>Discounted from <s>₹{beauty.oldPrice}</s></p>
              
              {cartItem ? (
                <div>
                  Quantity : 
                  <span className="quan">{cartItem.quantity}</span>
                  <button onClick={() => decreaseQuantity(beauty.id)} className="plus_btn">➖</button>
                  <button onClick={() => increaseQuantity(beauty.id)} className="plus_btn">➕</button>
                  </div>
              ) : (
                <button onClick={() => handleAddToCart(beauty)} className="cartbtn">
                  Add to cart
                </button>
              )}
              </div>

              {isPopupVisible === beauty.name && <div style={popupStyle}>{beauty.name} added to cart</div>}
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
