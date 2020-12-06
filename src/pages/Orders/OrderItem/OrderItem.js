import React from "react";
import classes from "./OrderItem.module.css";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
} from "@material-ui/core";
import { formatProductTitle } from "../../../utils/products/products";
import { cancelOrder } from "../../../store/actions/order/orderAction";
import { useDispatch } from "react-redux";

const OrderItem = ({
  order: {
    id,
    amount,
    order_detail,
    name,
    payment_method,
    delivery_method,
    phone_number,
    address,
    email,
  },
}) => {
  const dispatch = useDispatch();
  const cartItemsMarkup = order_detail?.map((item) => (
    <TableRow key={item?.product_id}>
      <TableCell>
        <img
          className={classes.orderImage}
          src={item?.products?.image}
          alt={formatProductTitle(item?.products?.name)}
        />
      </TableCell>
      <TableCell component='th' scope='row'>
        {formatProductTitle(item?.products?.name, 10)}
      </TableCell>
      <TableCell>{item?.products?.price} đ</TableCell>
      <TableCell>{item?.products?.originPrice} đ</TableCell>
      <TableCell>{item?.number}</TableCell>
    </TableRow>
  ));
  return (
    <div className={classes.OrderItem}>
      <header>
        <p>
          Đơn hàng : <strong>{id}</strong>
        </p>
        {payment_method !== "1" ? (
          <button
            className='btn btn-danger'
            onClick={() => dispatch(cancelOrder(id))}
          >
            Hủy đơn
          </button>
        ) : (
          <button className='btn btn-success'>Đã thanh toán</button>
        )}
      </header>
      <TableContainer>
        <Table className={classes.table} aria-label='order list table'>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell> Sản phẩm </TableCell>
              <TableCell> Giá </TableCell>
              <TableCell> Giá gốc</TableCell>
              <TableCell> Số lượng </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{cartItemsMarkup}</TableBody>
        </Table>
      </TableContainer>
      <div className={classes.OrderInfo}>
        <p>Tổng giá trị đơn : {(+amount).toFixed(2)} đ</p>
        <h3>Thông tin người nhận</h3>
        <p>
          Họ tên : <strong>{name}</strong>
        </p>
        <p>
          Email : <strong>{email}</strong>
        </p>
        <p>
          Số điện thoại : <strong>{phone_number}</strong>
        </p>
        <p>
          Địa chỉ : <strong>{address}</strong>
        </p>
        <p>
          Hình thức vận chuyển :{" "}
          <strong>
            {delivery_method === "1"
              ? "Giao hàng tận nơi"
              : "Khách hàng đến lấy"}
          </strong>
        </p>
        <p>
          Phương thức thanh toán :{" "}
          <strong>
            {payment_method === "1"
              ? "Chuyển khoản online"
              : "Thanh toán khi nhận hàng"}
          </strong>
        </p>
      </div>
    </div>
  );
};

export default OrderItem;
