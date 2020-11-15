import React from 'react';
import classes from './OrderItem.module.css';
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer } from '@material-ui/core';
import { formatProductTitle } from '../../../utils/products/products';
import { cancelOrder } from '../../../store/actions/order/orderAction';
import { useDispatch } from 'react-redux';

const OrderItem = ({ order: { id, total, cartItems, receiverInfo } }) => {
  const dispatch = useDispatch();
  const cartItemsMarkup = cartItems.map((item) => (
    <TableRow key={item.id}>
      <TableCell>
        <img className={classes.orderImage} src={item.image} alt={formatProductTitle(item.title)} />
      </TableCell>
      <TableCell component="th" scope="row">
        {formatProductTitle(item.title, 10)}
      </TableCell>
      <TableCell>{item.price} đ</TableCell>
      <TableCell>{item.originPrice} đ</TableCell>
      <TableCell>{item.amount}</TableCell>
    </TableRow>
  ));
  return (
    <div className={classes.OrderItem}>
      <header>
        <p>Đơn hàng : <strong>{id}</strong></p>
        {
          receiverInfo.paymentMethod !== 'bank' ? <button className="btn btn-danger" onClick={() => dispatch(cancelOrder(id))}>
            Hủy đơn</button> : <button className="btn btn-success">Đã thanh toán</button>
        }
      </header>
      <TableContainer>
        <Table className={classes.table} aria-label="order list table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell> Sản phẩm </TableCell>
              <TableCell> Giá </TableCell>
              <TableCell> Giá gốc</TableCell>
              <TableCell> Số lượng </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItemsMarkup}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={classes.OrderInfo}>
        <p>Tổng giá trị đơn : {total.toFixed(2)} đ</p>
        <h3>Thông tin người nhận</h3>
        <p>
          Họ tên : <strong>{receiverInfo.name}</strong>
        </p>
        <p>
          Số điện thoại : <strong>{receiverInfo.phoneNumber}</strong>
        </p>
        <p>
          Địa chỉ : <strong>{receiverInfo.address}</strong>
        </p>
        <p>
          Hình thức vận chuyển : <strong>{receiverInfo.deliveryMethod === 'cod' ? 'Giao hàng tận nơi' : 'Khách hàng đến lấy'}</strong>
        </p>
        <p>
          Phương thức thanh toán : <strong>{receiverInfo.paymentMethod === 'bank' ? 'Chuyển khoản online' : 'Thanh toán khi nhận hàng'}</strong>
        </p>
      </div>
    </div>
  );
};

export default OrderItem;
