import React, { useState, useEffect } from "react";
import classes from "./Orders.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchOrders,
  filterOrders,
  // fetchOrdersByUserId,
} from "../../store/actions/order/orderAction";
// import { fetchAllUsers } from "../../store/actions/user/userAction";
import Spinner from "../../components/UI/Spinner/Spinner";
import OrderItem from "./OrderItem/OrderItem";
import EmptyOrders from "./EmptyOrders/EmptyOrders";
import {
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";

const Orders = () => {
  const dispatch = useDispatch();
  const { orderItems, loading } = useSelector((state) => state.order);
  const { userInfo } = useSelector((state) => state.profile);
  const { users } = useSelector((state) => state.user);
  const [user, setUser] = useState("");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    // dispatch(fetchOrders());
  }, [dispatch]);

  useEffect(() => {
    // dispatch(fetchAllUsers());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      // dispatch(fetchOrdersByUserId(user));
    }
  }, [user, dispatch]);

  const orderItemsMarkup = orderItems.map((order) => (
    <OrderItem key={order.id} order={order} />
  ));
  return (
    <React.Fragment>
      {loading && <Spinner />}
      <div className={classes.Orders}>
        <div className={classes.OrdersHeader}>
          <h3>Danh sách đơn hàng ({orderItems?.length} đơn hàng) </h3>
          <ul className={classes.OrdersFilter}>
            <Button onClick={() => dispatch(fetchOrders())}>Tất cả đơn</Button>
            <Button
              variant='contained'
              className='bg-success'
              onClick={() => dispatch(filterOrders("bank"))}
            >
              Đã thanh toán
            </Button>
            <Button
              variant='contained'
              className='bg-danger'
              onClick={() => dispatch(filterOrders("check"))}
            >
              Chưa thanh toán
            </Button>
            {userInfo.role === 1 && (
              <FormControl className={classes.UserList}>
                <InputLabel id='user-order-select'>Khách hàng</InputLabel>
                <Select
                  labelId='user-order-select'
                  id='user-order-select-options'
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                >
                  <MenuItem key='alluser' value='all'>
                    Tất cả
                  </MenuItem>
                  {users.map((user) => (
                    <MenuItem key={user.id} value={user.uid}>
                      {user.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          </ul>
        </div>
        <div className={classes.OrderList}>
          {orderItems.length > 0 ? orderItemsMarkup : <EmptyOrders />}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Orders;
