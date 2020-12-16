import React, { useState } from "react";
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
import {
  cancelOrder,
  shipOrderSuccess,
} from "../../../store/actions/order/orderAction";
import { useDispatch, useSelector } from "react-redux";
import { formatMoney } from "../../../utils/formatMoney";
import axios from "../../../store/api/axios";
import { setAlert } from "../../../store/actions/alert/alertAction";
import ConfirmDelete from "../../../components/shared/ConfirmDelete/ConfirmDelete";

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
    status,
  },
}) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const closeConfirm = () => setShowConfirm(false);
  const openConfirm = () => setShowConfirm(true);
  const { userInfo } = useSelector((state) => state.profile);
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
      <TableCell>{formatMoney(item?.products?.price)} đ</TableCell>
      <TableCell>{formatMoney(item?.products?.originPrice)} đ</TableCell>
      <TableCell>{item?.number}</TableCell>
    </TableRow>
  ));
  const shippingSuccessHandler = async (oId) => {
    try {
      const res = await axios.post(
        "/order/update-success",
        {
          order_id: oId,
        },
        {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      );
      dispatch(shipOrderSuccess(oId, res.data.data));
      dispatch(setAlert("Giao hàng thành công", "Success"));
    } catch (error) {
      dispatch(setAlert("Giao hàng thất bại", "Danger"));
    }
  };
  const cancelOrderHandler = () => {
    if(selectedOrder) {
      dispatch(cancelOrder(selectedOrder));
    }
  }
  return (
    <div className={classes.OrderItem}>
      <header>
        <p>
          Đơn hàng : <strong>{id}</strong>
        </p>
        <div>
          {status === "2" ? (
            <span className='btn btn-success'>Đã giao hàng</span>
          ) : (
            <>
              {userInfo.role !== 3 && (
                <button
                  className='btn btn-warning mr-2'
                  onClick={() => shippingSuccessHandler(id)}
                >
                  Giao hàng
                </button>
              )}
              {payment_method === "2" ? (
                <button
                  className='btn btn-danger'
                  onClick={() => {
                    openConfirm();
                    setSelectedOrder(id)
                  }}
                >
                  Hủy đơn
                </button>
              ) : (
                <button className='btn btn-success'>Đã thanh toán</button>
              )}
            </>
          )}
        </div>
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
        <p>Tổng giá trị đơn : {formatMoney(+amount)} đ</p>
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
      {showConfirm && (
        <ConfirmDelete
          show={showConfirm}
          close={closeConfirm}
          clicked={cancelOrderHandler}
        />
      )}
    </div>
  );
};

export default OrderItem;
