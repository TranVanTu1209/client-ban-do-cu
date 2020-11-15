import React from 'react';
import classes from './SearchResultItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../../../store/actions/cart/cartAction';

const SearchResultItem = ({ product, showButton }) => {
  const dispatch = useDispatch();
  const { email } = useSelector(state => state.auth);
  return (
    <div className={classes.SearchResultItem}>
      <img src={product.image} alt={product.title} />
      <div>
        <p className="lead"> {product.title} </p>
        <small> {product.price} đ</small>
      </div>
      {
        !product.soldOut && showButton && email !== 'admin@gmail.com' && <button onClick={() => dispatch(addItemToCart(product))}>Mua ngay</button>
      }
    </div >
  );
}

export default SearchResultItem;
