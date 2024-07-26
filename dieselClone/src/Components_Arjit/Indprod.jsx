import { useState,useEffect } from "react";
import './Inprod.css'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
function Indprod({ ide=100 }) {
  const [prod, setprod] = useState(ide);
  const [proar, setPro] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [heartColor, setHeartColor] = useState('red');
  const [obj, setobj] = useState([]);
  const handleClick = () => {
    setHeartColor('black');
  };
  async function getData() {
    let res = await fetch('http://localhost:3000/products');
    setPro(await res.json());
    console.log(proar);
    console.log(prod);
  }
  useEffect(() => {
    getData();
  }, []);
  async function addto(ide) {
    setobj(proar.filter(x => x.id == ide));
    console.log(obj);
  }
  useEffect(() => {
    addto(prod);
  }, [proar]);

  return (
    <>
      <div className="prods">
      {obj.map((el) => (
        <div className="product-detail" key={el.id}>
          <div className="image-section">
            <img src={el.image} alt="Product" />
          </div>
          <div className="details-section">
            <h1>{el.title}</h1>
            <p className="price">
              MRP-<span className="original-price">Rs {el.oldprice}</span>
              <span className="discounted-price">Rs {el.newprice}  (40% Off)</span>
            </p>
            <p className="tax-info">Price inclusive of all taxes</p>
            <div className="color-selection">
              <span><b>COLOR:  </b>{selectedColor}</span>
              <div className="color-options">
                <button
                  className={`color-button white ${selectedColor === 'white' ? 'selected' : ''}`}
                  onClick={() => setSelectedColor('white')}
                ></button>
                <button
                  className={`color-button black ${selectedColor === 'black' ? 'selected' : ''}`}
                  onClick={() => setSelectedColor('black')}
                ></button>
              </div>
            </div>
            <div className="size-selection">
              <span><b>CHOOSE SIZE</b></span>
              <div className="size-options">
                {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                  <button
                    key={size}
                    className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <input className="txtcd" type="text" id="te" placeholder="Enter delivery code" />
              <button className="check-delivery">Check delivery</button>
            </div>
            <div>
              <button className="add-to-cart">ADD TO CART</button>
              <FaRegHeart className="heart" size={25} color={heartColor} onClick={handleClick} />
            </div>
            <div className="wrapper">
              <div className="collapsible">
                <input type="checkbox" id="collapsible-head" />
                <label htmlFor="collapsible-head">DESCRIPTION</label>
                <div className="collapsible-text">
                  <p>{el.description}</p>
                </div>
              </div>
            </div>
            <div className="wrapper">
              <div className="collapsible">
                <input type="checkbox" id="collapsible-head2" />
                <label htmlFor="collapsible-head2">PRODUCT DETAILS</label>
                <div className="collapsible-text">
                  <ul>
                    <li>{el.pdetails.Material}</li>
                    <li>{el.pdetails.Color}</li>
                    <li>{el.pdetails.Occasion}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="wrapper">
              <div className="collapsible">
                <input type="checkbox" id="collapsible-head3" />
                <label htmlFor="collapsible-head3">RETURN TIME LIMIT</label>
                <div className="collapsible-text">
                  <p>{el.Rtm}</p>
                </div>
              </div>
            </div>
            <div className="wrapper">
              <div className="collapsible">
                <input type="checkbox" id="collapsible-head4" />
                <label htmlFor="collapsible-head4">OTHER DETAILS</label>
                <div className="collapsible-text">
                  <ul>
                    <li>{el.otdetails.csd}</li>
                    <li>{el.otdetails.mib}</li>
                    <li>{el.otdetails.nq}</li>
                    <li>{el.otdetails.coo}</li>
                    <li>{el.otdetails.noc}</li>
                    <li>{el.otdetails.sc}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
export default Indprod;