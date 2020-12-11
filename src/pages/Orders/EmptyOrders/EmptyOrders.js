import React from "react";
import { Link } from "react-router-dom";
import classes from "./EmptyOrders.module.css";
import { useSelector } from "react-redux";

const EmptyOrders = () => {
  const { userInfo } = useSelector((state) => state.profile);
  return (
    <div className={classes.EmptyOrders}>
      <h1>Danh sách đơn hàng trống</h1>
      {userInfo?.role === 3 ? (
        <Link to='/' className='btn btn-yellow'>
          Tiếp tục mua sắm
        </Link>
      ) : (
        <Link to='/dashboard/product/new' className='btn btn-yellow'>
          Tạo thêm sản phẩm để bán
        </Link>
      )}
    </div>
  );
};

export default EmptyOrders;
