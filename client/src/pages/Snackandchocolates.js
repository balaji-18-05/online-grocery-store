import React, { useContext, useState } from "react";
import MenuAppBar from "../Navbar";
import Footer from "../Footer";
import { CartContext } from "./CartContext";
import '../styles/cart.css'
import ScrollToTop from "./Scrolltotop";
export default function Snackandchocolates() {
  const { addToCart, increaseQuantity, decreaseQuantity, cart } = useContext(CartContext);

  const snacksandcoco = [
    { id: 133, img: "/snacks/Bingo cream and onion.webp", name: "Bingo cream and onion", price: 27, oldPrice: 30 },
    { id: 134, img: "/snacks/Bingo madangles.webp", name: "Bingo mad Angles", price: 27, oldPrice: 30 },
    { id: 135, img: "/snacks/Bingo original style.webp", name: "Bingo original style", price: 25, oldPrice: 30 },
    { id: 136, img: "/snacks/Dairy milk.jpg", name: "Diary milk", price: 110, oldPrice: 120 },
    { id: 137, img: "/snacks/Diary milk silk.avif", name: "Dairy milk silk", price: 500, oldPrice: 550 },
    { id: 138, img: "/snacks/Five star.jpg", name: "Five star", price: 20, oldPrice: 30 },
    { id: 139, img: "/snacks/Kitkat.webp", name: "Kitkat", price: 30, oldPrice: 40 },
    { id: 140, img: "/snacks/Kurkure-Green-Chutney-Style.jpg", name: "Kurkure green chutney", price: 50, oldPrice: 60 },
    { id: 141, img: "/snacks/Kurkure masala munch.jpg", name: "Kurkure masala ", price: 30, oldPrice: 40 },
    { id: 142, img: "/snacks/Lays.jpg", name: "Lays", price: 15, oldPrice: 20 },
    { id: 143, img: "/snacks/Mixtures.webp", name: "mixtures", price: 90, oldPrice: 100 },
    { id: 144, img: "/snacks/Soya sticks.webp", name: "Soya sticks", price: 50, oldPrice: 60 },
    { id: 145, img: "/snacks/Spice lays.jpg", name: "Spice lays", price: 20, oldPrice: 25 },
  ];

  const [isPopupVisible, setIsPopupVisible] = useState("");

  const handleAddToCart = (snack) => {
    addToCart(snack);
    setIsPopupVisible(snack.name);
    setTimeout(() => setIsPopupVisible(""), 1500);
  };

  return (
    <>
    <ScrollToTop/>
      <MenuAppBar />
      <h1 className="heading" > snacks and chocolates :</h1>
      <div className="image-container">
        {snacksandcoco.map((snack) => {
          const cartItem = cart.find((item) => item.id === snack.id);
          return (
            <div key={snack.id} className="img-card">
              <img src={snack.img} alt={snack.name} className="img-main" />
              <div className="content">

              <p>{snack.name}</p>
              <p>₹{`${snack.price}/kg`}</p>
              <p>Discounted from <s>₹{snack.oldPrice}</s></p>
              
              {cartItem ? (
                <div>
                  Quantity : 
                  <span className="quan">{cartItem.quantity}</span>
                  <button onClick={() => decreaseQuantity(snack.id)} className="plus_btn">➖</button>
                  <button onClick={() => increaseQuantity(snack.id)} className="plus_btn">➕</button>
                  </div>
              ) : (
                <button onClick={() => handleAddToCart(snack)} className="cartbtn">
                  Add to cart
                </button>
              )}
              </div>

              {isPopupVisible === snack.name && <div style={popupStyle}>{snack.name} added to cart</div>}
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
