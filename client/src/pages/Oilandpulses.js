import React, { useContext, useState } from "react";
import MenuAppBar from "../Navbar";
import Footer from "../Footer";
import { CartContext } from "./CartContext";
import '../cart.css'
import ScrollToTop from "./Scrolltotop";
export default function Oilandpulses() {
  const { addToCart, increaseQuantity, decreaseQuantity, cart } = useContext(CartContext);

  const Pulses = [
    { id: 95, img: "/pulses/black channa.webp", name: "Black channa", price: 150, oldPrice: 200 },
    { id: 96, img: "/pulses/black urad dhal.jpg", name: "Black urad dhal", price: 160, oldPrice: 180 },
    { id: 97, img: "/pulses/sundal.jpg", name: "sundal", price: 150, oldPrice: 180 },
    { id: 98, img: "/pulses/cow peas.jpg", name: "Cow peas", price: 110, oldPrice: 140 },
    { id: 99, img: "/pulses/green gram.jpg", name: "Green gram", price: 90, oldPrice: 95 },
    { id: 100, img: "/pulses/green peas.jpg", name: "Green peas", price: 250, oldPrice: 260 },
    { id: 101, img: "/pulses/horse gram.jpg", name: "Horse gram", price: 190, oldPrice: 210 },
    { id: 102, img: "/pulses/toor dhal.webp", name: "Toor dhal", price: 150, oldPrice: 160 },
    { id: 103, img: "/pulses/urad dhal.jpg", name: "Urad dhal", price: 150, oldPrice: 160 },
    { id: 104, img: "/pulses/Rice bran oil.webp", name: "Rice bran oil", price: 150, oldPrice: 170 },
    { id: 105, img: "/pulses/soyabean oil.webp", name: "soya bean oil", price: 180, oldPrice: 200 },
    { id: 106, img: "/pulses/sunflower oil.webp", name: "sunflower oil", price: 120, oldPrice: 160 },
    { id: 107, img: "/pulses/Mustard oil.webp", name: "Mustard oil", price: 190, oldPrice: 180 },
    { id: 108, img: "/pulses/Palm oil.webp", name: "Palm oil", price: 250, oldPrice: 290 },
  ];

  const [isPopupVisible, setIsPopupVisible] = useState("");

  const handleAddToCart = (pulse) => {
    addToCart(pulse);
    setIsPopupVisible(pulse.name);
    setTimeout(() => setIsPopupVisible(""), 1500);
  };

  return (
    <>
    <ScrollToTop/>
      <MenuAppBar />
      <h1 className="heading" >Oil and pulses :</h1>
      <div className="image-container">
        {Pulses.map((pulse) => {
          const cartItem = cart.find((item) => item.id === pulse.id);
          return (
            <div key={pulse.id} className="img-card">
              <img src={pulse.img} alt={pulse.name} className="img-main" />
              <div className="content">

              <p>{pulse.name}</p>
              <p>₹{`${pulse.price}/kg`}</p>
              <p>Discounted from <s>₹{pulse.oldPrice}</s></p>
              
              {cartItem ? (
                <div>
                  Quantity : 
                  <span className="quan">{cartItem.quantity}</span>
                  <button onClick={() => decreaseQuantity(pulse.id)} className="plus_btn">➖</button>
                  <button onClick={() => increaseQuantity(pulse.id)} className="plus_btn">➕</button>
                  </div>
              ) : (
                <button onClick={() => handleAddToCart(pulse)} className="cartbtn">
                  Add to cart
                </button>
              )}
              </div>

              {isPopupVisible === pulse.name && <div style={popupStyle}>{pulse.name} added to cart</div>}
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
