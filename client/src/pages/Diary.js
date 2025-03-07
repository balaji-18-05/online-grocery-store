import React, { useContext, useState } from "react";
import MenuAppBar from "../Navbar";
import Footer from "../Footer";
import { CartContext } from "./CartContext";
import '../cart.css'
import ScrollToTop from "./Scrolltotop";
export default function Diary() {
  const { addToCart, increaseQuantity, decreaseQuantity, cart } = useContext(CartContext);

  const Dairy = [
    { id: 63, img: "/dairy/butter.webp", name: "Butter", price: 300, oldPrice: 330 },
    { id: 64, img: "/dairy/cheese.jpg", name: "cheese", price: 350, oldPrice: 380 },
    { id: 65, img: "/dairy/ghee.jpg", name: "Ghee", price: 420, oldPrice: 460 },
    { id: 66, img: "/dairy/milk.jpg", name: "Milk", price: 60, oldPrice: 65 },
    { id: 67, img: "/dairy/milkshake.jpg", name: "Milkshake", price: 130, oldPrice: 150 },
    { id: 68, img: "/dairy/paneer.jpg", name: "Paneer", price: 190, oldPrice: 210 },
    { id: 69, img: "/dairy/whippedcream.jpg", name: "whippedcream", price: 200, oldPrice: 210 },
    { id: 70, img: "/dairy/yogurt.jpg", name: "yogurt", price: 100, oldPrice: 110 },

  ];

  const [isPopupVisible, setIsPopupVisible] = useState("");

  const handleAddToCart = (dairy) => {
    addToCart(dairy);
    setIsPopupVisible(dairy.name);
    setTimeout(() => setIsPopupVisible(""), 1500);
  };

  return (
    <>
      <MenuAppBar />
      <h1 className="heading" >Dairy products :</h1>
      <div className="image-container">
        {Dairy.map((dairy) => {
          const cartItem = cart.find((item) => item.id === dairy.id);
          return (
            <div key={dairy.id} className="img-card">
              <img src={dairy.img} alt={dairy.name} className="img-main" />
              <div className="content">

              <p>{dairy.name}</p>
              <p>₹{dairy.name === "Milk"|| Diary.name==="Ghee" ? `${dairy.price}/ltr` : `${dairy.price}/kg`}</p>
              <p>Discounted from <s>₹{dairy.oldPrice}</s></p>
              
              {cartItem ? (
                <div>
                  Quantity : 
                  <span className="quan">{cartItem.quantity}</span>
                  <button onClick={() => decreaseQuantity(dairy.id)} className="plus_btn">➖</button>
                  <button onClick={() => increaseQuantity(dairy.id)} className="plus_btn">➕</button>
                  </div>
              ) : (
                <button onClick={() => handleAddToCart(dairy)} className="cartbtn">
                  Add to cart
                </button>
              )}
              </div>

              {isPopupVisible === dairy.name && <div style={popupStyle}>{dairy.name} added to cart</div>}
            </div>
          );
        })}
      </div>
      <Footer />
      <ScrollToTop/>
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
