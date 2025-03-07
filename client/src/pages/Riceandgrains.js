import React, { useContext, useState } from "react";
import MenuAppBar from "../Navbar";
import Footer from "../Footer";
import { CartContext } from "./CartContext";
import '../cart.css'
import ScrollToTop from "./Scrolltotop";
export default function Riceandgrains() {
  const { addToCart, increaseQuantity, decreaseQuantity, cart } = useContext(CartContext);

  const Riceandgrains = [
    { id: 109, img: "/riceandgrains/corn.jpg", name: " Sweet corn", price: 150, oldPrice: 200 },
    { id: 110, img: "/riceandgrains/millet.jpg", name: "Millet ", price: 150, oldPrice: 180 },
    { id: 111, img: "/riceandgrains/oats.jpg", name: "Oats", price: 50, oldPrice: 80 },
    { id: 112, img: "/riceandgrains/wheat.jpg", name: "Wheat", price: 110, oldPrice: 140 },
    { id: 113, img: "/riceandgrains/basmathi.webp", name: "Premium Basmathi rice", price: 50, oldPrice: 70 },
    { id: 114, img: "/riceandgrains/chennai basmathi.jpg", name: "Chennai gate basmathi rice", price: 150, oldPrice: 190 },
    { id: 115, img: "/riceandgrains/Ir20.webp", name: "IR 20 rice", price: 5, oldPrice: 10 },
    { id: 116, img: "/riceandgrains/mappilai sambha.jpg", name: "Mappilai sambha", price: 50, oldPrice: 60 },
    { id: 117, img: "/riceandgrains/ponni.jpg", name: "ponni rice", price: 50, oldPrice: 60 },
    { id: 118, img: "/riceandgrains/rajabogam.jpg", name: "Rajabogam rice", price: 150, oldPrice: 170 },
    { id: 119, img: "/riceandgrains/seeraga sambha.jpg", name: "Seeraga sambha", price: 180, oldPrice: 200 },
  ];

  const [isPopupVisible, setIsPopupVisible] = useState("");

  const handleAddToCart = (grains) => {
    addToCart(grains);
    setIsPopupVisible(grains.name);
    setTimeout(() => setIsPopupVisible(""), 1500);
  };

  return (
    <>
    <ScrollToTop/>
      <MenuAppBar />
      <h1 className="heading" >Rice and grains :</h1>
      <div className="image-container">
        {Riceandgrains.map((grains) => {
          const cartItem = cart.find((item) => item.id === grains.id);
          return (
            <div key={grains.id} className="img-card">
              <img src={grains.img} alt={grains.name} className="img-main" />
              <div className="content">

              <p>{grains.name}</p>
              <p>₹{`${grains.price}/kg`}</p>
              <p>Discounted from <s>₹{grains.oldPrice}</s></p>
              
              {cartItem ? (
                <div>
                  Quantity : 
                  <span className="quan">{cartItem.quantity}</span>
                  <button onClick={() => decreaseQuantity(grains.id)} className="plus_btn">➖</button>
                  <button onClick={() => increaseQuantity(grains.id)} className="plus_btn">➕</button>
                  </div>
              ) : (
                <button onClick={() => handleAddToCart(grains)} className="cartbtn">
                  Add to cart
                </button>
              )}
              </div>

              {isPopupVisible === grains.name && <div style={popupStyle}>{grains.name} added to cart</div>}
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
