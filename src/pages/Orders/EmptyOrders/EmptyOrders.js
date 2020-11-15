import React from 'react';
import { Link } from 'react-router-dom';
import classes from './EmptyOrders.module.css';

const EmptyOrders = () => {
  return (
    <div className={classes.EmptyOrders}>
      <h1>Danh sách đơn hàng trống</h1>
      <Link to="/" className="btn btn-yellow">
        Tiếp tục mua sắm
      </Link>
    </div>
  )
}

export default EmptyOrders;
