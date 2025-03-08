import React, { useContext, useState } from "react";
import MenuAppBar from "../Navbar";
import Footer from "../Footer";
import { CartContext } from "./CartContext";
import '../styles/cart.css'
import ScrollToTop from "./Scrolltotop";
export default function Cleaningandhousehold() {
  const { addToCart, increaseQuantity, decreaseQuantity, cart } = useContext(CartContext);

  const Cleaningandhousehold = [
    { id: 52, img: "/household/colin.jpg", name: "Colin Cleaning spray", price: 150, oldPrice: 160 },
    { id: 53, img: "/household/Dettol.jpg", name: "Dettol", price: 90, oldPrice: 100 },
    { id: 54, img: "/household/Genteel.jpg", name: "Dettol for cleaning", price: 120, oldPrice: 130 },
    { id: 55, img: "/household/Gloves.jpg", name: "Gloves", price: 80, oldPrice: 90 },
    { id: 56, img: "/household/Harpic.jpg", name: "Harpic", price: 50, oldPrice: 55 },
    { id: 57, img: "/household/mop.jpg", name: "Cleaning mop", price: 120, oldPrice: 130 },
    { id: 58, img: "/household/Rin soap.webp", name: "Rin soap", price: 15, oldPrice: 20 },
    { id: 59, img: "/household/Surf  excel.webp", name: "Surf excel", price: 50, oldPrice: 60 },
    { id: 60, img: "/household/Tide soap.jpg", name: "Tide soap", price: 20, oldPrice: 25 },
    { id: 61, img: "/household/Tide.webp", name: "Tide", price: 130, oldPrice: 140 },
    { id: 62, img: "/household/Vanish.webp", name: "Vanish", price: 150, oldPrice: 160 },
  ];

  const [isPopupVisible, setIsPopupVisible] = useState("");

  const handleAddToCart = (households) => {
    addToCart(households);
    setIsPopupVisible(households.name);
    setTimeout(() => setIsPopupVisible(""), 1500);
  };

  return (
    <>
    <ScrollToTop/>
      <MenuAppBar />
      <h1 className="heading" >Cleaning &  households :</h1>
      <div className="image-container">
        {Cleaningandhousehold.map((households) => {
          const cartItem = cart.find((item) => item.id === households.id);
          return (
            <div key={households.id} className="img-card">
              <img src={households.img} alt={households.name} className="img-main" />
              <div className="content">

              <p>{households.name}</p>
              <p>₹{`${households.price}/kg`}</p>
              <p>Discounted from <s>₹{households.oldPrice}</s></p>
              
              {cartItem ? (
                <div>
                  Quantity : 
                  <span className="quan">{cartItem.quantity}</span>
                  <button onClick={() => decreaseQuantity(households.id)} className="plus_btn">➖</button>
                  <button onClick={() => increaseQuantity(households.id)} className="plus_btn">➕</button>
                  </div>
              ) : (
                <button onClick={() => handleAddToCart(households)} className="cartbtn">
                  Add to cart
                </button>
              )}
              </div>

              {isPopupVisible === households.name && <div style={popupStyle}>{households.name} added to cart</div>}
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
