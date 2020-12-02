import React from "react";
import classes from "./SearchResultItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../../../store/actions/cart/cartAction";

const SearchResultItem = ({ product, showButton }) => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.profile);
  return (
    <div className={classes.SearchResultItem}>
      <img src={product.image} alt={product.name} />
      <div>
        <p> {product.name} </p>
        <small> {product.price} đ</small>
      </div>
      {!(+product.number <= 0) && showButton && userInfo?.role === 3 && (
        <button onClick={() => dispatch(addItemToCart(product))}>
          Mua ngay
        </button>
      )}
    </div>
  );
};

export default SearchResultItem;
