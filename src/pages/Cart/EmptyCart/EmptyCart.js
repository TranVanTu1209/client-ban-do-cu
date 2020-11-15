import React from 'react'
import { Link } from 'react-router-dom';
import classes from './EmptyCart.module.css';

const EmptyCart = () => {
  return (
    <div className={classes.EmptyCart}>
      <img src="https://salt.tikicdn.com/desktop/img/mascot@2x.png" alt="empty cart" />
      <p>Không có sản phẩm nào trong giỏ hàng của bạn.</p>
      <Link to="/" className="btn btn-yellow">
        Tiếp tục mua sắm
      </Link>
    </div>
  );
}

export default EmptyCart;
