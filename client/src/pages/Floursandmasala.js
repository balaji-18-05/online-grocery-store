import React, { useContext, useState } from "react";
import MenuAppBar from "../Navbar";
import Footer from "../Footer";
import { CartContext } from "./CartContext";
import '../cart.css'
import ScrollToTop from "./Scrolltotop";
export default function Floursandmasala() {
  const { addToCart, increaseQuantity, decreaseQuantity, cart } = useContext(CartContext);

  const Floursandmasala = [
    { id: 71, img: "/flours/Aashirvaad wheat flour.jpg", name: "Aashirvaad wheat flour", price: 60, oldPrice: 65 },
    { id: 72, img: "/flours/Chicken masala.webp", name: "Chicken masala", price: 160, oldPrice: 170 },
    { id: 73, img: "/flours/Chilli powder.webp", name: "Red Chilli powder", price: 120, oldPrice: 130 },
    { id: 74, img: "/flours/Corn flour.jpg", name: "Corn flour", price: 70, oldPrice: 75 },
    { id: 75, img: "/flours/Curry masala.webp", name: "Curry masala", price: 80, oldPrice: 85 },
    { id: 76, img: "/flours/Fish masala.jpg", name: "Fish masala", price: 75, oldPrice: 80 },
    { id: 77, img: "/flours/Garam masala.jpg", name: "Garam masala", price: 55, oldPrice: 60 },
    { id: 78, img: "/flours/Maida.jpg", name: "Maida", price: 100, oldPrice: 110 },
    { id: 79, img: "/flours/Gram flour.webp", name: "Gram flour", price: 70, oldPrice: 80 },
    { id: 80, img: "/flours/Roasted rava.webp", name: "Roasted rava", price:50, oldPrice: 55 },
    { id: 81, img: "/flours/wheat rava.jpg", name: "wheat rava", price: 30, oldPrice:40 },
    { id: 82, img: "/flours/Rice flour.webp", name: "Rice flour", price: 90, oldPrice: 100 },
  ];

  const [isPopupVisible, setIsPopupVisible] = useState("");

  const handleAddToCart = (fruit) => {
    addToCart(fruit);
    setIsPopupVisible(fruit.name);
    setTimeout(() => setIsPopupVisible(""), 1500);
  };

  return (
    <>
    <ScrollToTop/>
      <MenuAppBar />
      <h1 className="heading" >Flours & masala :</h1>
      <div className="image-container">
        {Floursandmasala.map((fruit) => {
          const cartItem = cart.find((item) => item.id === fruit.id);
          return (
            <div key={fruit.id} className="img-card">
              <img src={fruit.img} alt={fruit.name} className="img-main" />
              <div className="content">

              <p>{fruit.name}</p>
              <p>₹{ `${fruit.price}/kg`}</p>
              <p>Discounted from <s>₹{fruit.oldPrice}</s></p>
              
              {cartItem ? (
                <div>
                  Quantity : 
                  <span className="quan">{cartItem.quantity}</span>
                  <button onClick={() => decreaseQuantity(fruit.id)} className="plus_btn">➖</button>
                  <button onClick={() => increaseQuantity(fruit.id)} className="plus_btn">➕</button>
                  </div>
              ) : (
                <button onClick={() => handleAddToCart(fruit)} className="cartbtn">
                  Add to cart
                </button>
              )}
              </div>

              {isPopupVisible === fruit.name && <div style={popupStyle}>{fruit.name} added to cart</div>}
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
