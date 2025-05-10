import { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Context/StoreContext";

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="city" />
          <input type="text" placeholder="state" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="zip code" />
          <input type="text" placeholder="country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
      <h2>Cart Totals</h2>
        <div>
        <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fees</p>
            <p>${getTotalCartAmount()===0?0:2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p className="total">Total</p>
            <p className="total">${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
          </div>
        </div>
        <button>PROCEED TO PAYMENT</button>
      </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
