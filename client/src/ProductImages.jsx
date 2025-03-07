import {React} from 'react'
import { useContext,useState,useEffect,useRef} from 'react';
import { CartContext } from './pages/CartContext';
import { Link,useLocation} from 'react-router-dom';
import ScrollToTop from './pages/Scrolltotop';
export  function Images() {
   const { addToCart, increaseQuantity, decreaseQuantity, cart } = useContext(CartContext);
   
   const scrollContainerRef = useRef(null);
   
   const ScrollToLeft = () => {
     if (scrollContainerRef.current) {
       scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
     }
   }
   const ScrollToRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  }

    const deals = [
      { id: 1, img: "/fruits/apple.jpg", name: "Apple", price: 130, oldPrice: 200 },
      { id: 2, img: "/fruits/banana.jpg", name: "Banana", price: 50, oldPrice: 80 },
      { id: 3, img: "/vegetables/carrot.jpg", name: "carrot", price: 90, oldPrice: 100 },
      { id: 4, img: "/dairy/whippedcream.jpg", name: "whippedcream", price: 160, oldPrice: 200 },
      { id: 5, img: "/pulses/toor dhal.webp", name: "Toor dhal", price: 50, oldPrice: 70 },
      { id: 6, img: "/riceandgrains/millet.jpg", name: "Millet", price: 130, oldPrice: 150 },
      { id: 7, img: "/snacks/Diary milk silk.avif", name: "Diary milk silk", price: 450, oldPrice: 500 },
      { id: 8, img: "/dairy/butter.webp", name: "Butter", price: 270, oldPrice: 300},
      { id: 9, img: "/flours/Fish masala.jpg", name: "Fish masala", price: 70, oldPrice: 90 },
      { id: 10, img: "/beverages/Mango juice.jpg", name: "Mango Juice", price: 150, oldPrice: 170 },
      { id: 11, img: "/flours/wheat rava.jpg", name: "Wheat rava", price: 25, oldPrice: 30 },
      { id: 12, img: "/beautyandhygiene/Head and shoulders shampoo.jpg", name: "Head and shoulders shampoo", price: 50, oldPrice: 60 },
    ];
  
    const [isPopupVisible, setIsPopupVisible] = useState("");
  
    const handleAddToCart = (itr) => {
      addToCart(itr);
      setIsPopupVisible(itr.name);
      setTimeout(() => setIsPopupVisible(""), 1500);
    };
  
  return (
  <>
  <ScrollToTop/>
  <center>
  <p className='toleft' onClick={()=>ScrollToLeft()}><img src="leftclick.png" id="toleftarrow"></img> </p>
  <p className='toright' onClick={()=>ScrollToRight()}> <img src="rightclick.png" id="torightarrow"></img></p>
    <div class='image-container-main' ref={scrollContainerRef}>
        
        <table>
            <tr>
                <nav>
                    <Link to="/Fruits"><img src='/products/fruits.jpeg' alt='fresh products' className='img-cat'/></Link>
                </nav>
            </tr>
            <tr><td>Fruits</td></tr>
        </table>
        <table>
            <tr>
            <nav>
                <Link to="/dairy"><img src='/products/diaryimg.jpg' alt='diary products'className='img-cat'/></Link>
            </nav>
            </tr>
            <tr><td>Dairy Products</td></tr>
        </table>
        <table>
            <tr>
                <nav><Link to="/riceandgrains"><img src='/products/grains.jpg' alt='food grains'className='img-cat'/></Link></nav>
            </tr>
            <tr><td>Rice & Grains</td></tr>
        </table>
        <table>
            <tr>
                <nav>
                    <Link to="/vegetables"> <img src='/products/vegetables.jpg' alt='vegeies'className='img-cat'/></Link>
                </nav>
            </tr>
            <tr><td>Vegetables</td></tr>
        </table>
        <table>
            <tr>
                <nav><Link to="oilandpulses"><img src='/products/oilandpulses.jpg' alt='oil'className='img-cat'/></Link></nav>
            </tr>
            <tr><td>Oil & Pulses</td></tr>
        </table>
       
        <table>
            <tr>
              <nav><Link to="/Beverages"><img src='/products/softdrinks.jpg' alt='softdrinks'className='img-cat'/></Link></nav>
            </tr>
            <tr><td>Beverages</td></tr>
        </table>
        <table>
            <tr>
              <nav><Link to="/Cakesandbiscuits"><img src='/products/cakesandbiscits.jpg' alt='cakesandbiscits'className='img-cat'/></Link></nav>
            </tr>
            <tr><td>Cakes & Biscits</td></tr>
        </table>
        <table>
            <tr>
              <nav><Link to="Snackandchocolates"><img src='/products/snack.jpeg' alt='snack'className='img-cat'/></Link></nav>
            </tr>
            <tr><td>Snacks & Chocolate</td></tr>
        </table>
        <table>
            <tr>
              <nav><Link to="Beautyandhygiene"><img src='/products/beautyandhygiene.jpeg' alt='beautyandhygiene'className='img-cat'/></Link></nav>
            </tr>
            <tr><td>Beauty & Hygiene</td></tr>
        </table>
        <table>
            <tr>
              <nav><Link to="Cleaningandhousehold"><img src='/products/household.jpeg' alt='household'className='img-cat'/></Link></nav>
              </tr>
            <tr><td>cleaning & Household</td></tr>
        </table>
        <table>
            <tr>
              <nav><Link to="Floursandmasala"><img src='/products/flour.jpg' alt='Flours and Masala'className='img-cat'/></Link></nav>
            </tr>
            <tr><td>Flours & Masala</td></tr>
        </table>
    </div>
    </center>
    <h1>Today's deals :</h1>
    <span id='offers'>Offers</span>
    <span id='off2'>on Products upto </span>
    <span id='off3'>50%</span>
    <center>
   <div className="image-offers-container">
        {deals.map((itr) => {
          const cartItem = cart.find((item) => item.id === itr.id);
          return (
            <div key={itr.id} className="img-offers-card">
              <img src={itr.img} alt={itr.name} className="img-offers" />
              <div className="content">

              <p>{itr.name}</p>
              <p>₹{`${itr.price}/kg`}</p>
              <p>Discounted from <s>₹{itr.oldPrice}</s></p>
              
              {cartItem ? (
                <div>
                  Quantity : 
                  <span className="quan">{cartItem.quantity}</span>
                  <button onClick={() => decreaseQuantity(itr.id)} className="plus_btn">➖</button>
                  <button onClick={() => increaseQuantity(itr.id)} className="plus_btn">➕</button>
                  </div>
              ) : (
                <button onClick={() => handleAddToCart(itr)} className="cartbtn">
                  Add to cart
                </button>
              )}
              </div>

              {isPopupVisible === itr.name && <div style={popupStyle}>{itr.name} added to cart</div>}
            </div>
          );
        })}
      </div>
    
    </center>
    </>
  )
}
const popupStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
  };