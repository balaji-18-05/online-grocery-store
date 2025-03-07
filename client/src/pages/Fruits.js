import React, { useContext, useState } from "react";
import MenuAppBar from "../Navbar";
import Footer from "../Footer";
import { CartContext } from "./CartContext";
import '../cart.css'
import ScrollToTop from "./Scrolltotop";
export default function Fruits() {
  const { addToCart, increaseQuantity, decreaseQuantity, cart } = useContext(CartContext);

  const Fruits = [
    { id: 83, img: "/fruits/apple.jpg", name: "Apple", price: 150, oldPrice: 200 },
    { id: 84, img: "/fruits/banana.jpg", name: "Banana", price: 50, oldPrice: 80 },
    { id: 85, img: "/fruits/grapes.webp", name: "Red Grapes", price: 120, oldPrice: 160 },
    { id: 86, img: "/fruits/grapes2.jpeg", name: "Green Grapes", price: 110, oldPrice: 140 },
    { id: 87, img: "/fruits/guava.webp", name: "Guava", price: 50, oldPrice: 70 },
    { id: 88, img: "/fruits/kiwi.webp", name: "Kiwi", price: 150, oldPrice: 190 },
    { id: 89, img: "/fruits/lemon.webp", name: "Lemon", price: 5, oldPrice: 10 },
    { id: 90, img: "/fruits/mango.jpg", name: "Mango", price: 50, oldPrice: 10 },
    { id: 91, img: "/fruits/orange.webp", name: "Orange", price: 70, oldPrice: 90 },
    { id: 92, img: "/fruits/pomegrante.jpeg", name: "Pomegrante", price: 150, oldPrice: 170 },
    { id: 93, img: "/fruits/strawberry.jpeg", name: "strawberry", price: 180, oldPrice: 200 },
    { id: 94, img: "/fruits/watermelon.jpeg", name: "Watermelon", price: 50, oldPrice: 60 },
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
      <h1 className="heading">Fresh Fruits :</h1>
      <div className="image-container">
        {Fruits.map((fruit) => {
          const cartItem = cart.find((item) => item.id === fruit.id);
          return (
            <div key={fruit.id} className="img-card">
              <img src={fruit.img} alt={fruit.name} className="img-main" />
              <div className="content">

              <p>{fruit.name}</p>
              <p>₹{fruit.name === "Lemon" ? `${fruit.price}/piece` : `${fruit.price}/kg`}</p>
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
