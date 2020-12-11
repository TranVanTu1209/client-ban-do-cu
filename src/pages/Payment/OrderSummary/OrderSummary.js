import React from "react";
import classes from "./OrderSummary.module.css";
import { useSelector } from "react-redux";
import { formatMoney } from "../../../utils/formatMoney";

const OrderSummary = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div className={classes.OrderSummary}>
      <div className={classes.ItemList}>
        {cartItems.map((item) => (
          <div key={item.id} className={classes.ItemSummary}>
            <img src={item.image} alt={item.name} className={classes.Image} />
            <div className={classes.Info}>
              <small> {item.name} </small>
              <p> {formatMoney(item.price)} đ</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderSummary;
