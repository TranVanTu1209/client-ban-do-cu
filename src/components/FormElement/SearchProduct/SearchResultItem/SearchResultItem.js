import React from "react";
import classes from "./SearchResultItem.module.css";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../../store/actions/cart/cartAction";
import { formatMoney } from "../../../../utils/formatMoney";

const SearchResultItem = ({ product, showButton }) => {
  const dispatch = useDispatch();
  return (
    <div className={classes.SearchResultItem}>
      <img src={product.image} alt={product.name} />
      <div>
        <p> {product.name} </p>
        <small> {formatMoney(product.price)} đ</small>
      </div>
      {!(+product.number <= 0) && showButton && (
        <button
          onClick={() => {
            dispatch(addItemToCart(product));
          }}
        >
          Thêm vào giỏ
        </button>
      )}
    </div>
  );
};

export default SearchResultItem;
