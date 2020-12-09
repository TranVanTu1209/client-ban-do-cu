import React, { useState, useEffect } from "react";
import classes from "./Payment.module.css";
import {
  Grid,
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import CartSubTotal from "../Cart/CartSubtotal/CartSubTotal";
import { useSelector, useDispatch } from "react-redux";
import OrderSummary from "./OrderSummary/OrderSummary";
import { createOrder } from "../../store/actions/order/orderAction";
import Spinner from "../../components/UI/Spinner/Spinner";
import { useHistory } from "react-router-dom";
import PaypalTransaction from "./PaypalTransaction/PaypalTransaction";
import { formatMoney } from "../../utils/formatMoney";

const Payment = () => {
  const dispatch = useDispatch();
  const {
    cart: { cartItems, subTotal, tax },
    order: { loading },
    profile: { userInfo },
  } = useSelector((state) => state);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [delivery_method, setDeliveryMethod] = useState("1");
  const [payment_method, setPaymentMethod] = useState("2");
  const [message, setMessage] = useState("");
  const [showPaypalBtn, setShowPaypalBtn] = useState(false);
  const [total, setTotal] = useState(0);
  const history = useHistory();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    if (userInfo) {
      setName(userInfo.name);
      setAddress(userInfo.address);
      setPhoneNumber(userInfo.phone_number);
    }
  }, [userInfo]);

  useEffect(() => {
    setTotal(delivery_method === "1" ? subTotal + tax + 25 : subTotal + tax);
  }, [delivery_method, subTotal, tax]);

  const onConfirmCheckout = (e) => {
    e.preventDefault();
    const receiverInfo = {
      name,
      address,
      phone_number,
      delivery_method,
      payment_method,
      message,
    };
    dispatch(createOrder({ cartItems, total }, receiverInfo, history));
  };
  return (
    <React.Fragment>
      {loading && <Spinner />}
      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
          <div className={classes.Payment}>
            <form onSubmit={onConfirmCheckout}>
              <div>
                <h3>Thông tin đặt hàng</h3>
                <div className={classes.FormGroup}>
                  <TextField
                    fullWidth
                    placeholder='Họ tên người nhận'
                    value={name}
                    disabled={showPaypalBtn}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className={classes.FormGroup}>
                  <TextField
                    fullWidth
                    placeholder='Địa chỉ người nhận'
                    disabled={showPaypalBtn}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className={classes.FormGroup}>
                  <TextField
                    fullWidth
                    placeholder='Số điện thoại người nhận'
                    disabled={showPaypalBtn}
                    value={phone_number}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className={classes.FormGroup}>
                  <TextField
                    fullWidth
                    placeholder='Ghi chú'
                    value={message}
                    disabled={showPaypalBtn}
                    multiline
                    rows={3}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <h3>Phương thức vận chuyển</h3>
                <div className={classes.FormGroup}>
                  <RadioGroup
                    value={delivery_method}
                    onChange={(e) => setDeliveryMethod(e.target.value)}
                  >
                    <FormControlLabel
                      value='1'
                      control={<Radio disabled={showPaypalBtn} />}
                      label='Ship COD'
                    />
                    <FormControlLabel
                      value='2'
                      control={<Radio disabled={showPaypalBtn} />}
                      label='Nhận hàng tại cửa hàng'
                    />
                  </RadioGroup>
                  {delivery_method === "1" && (
                    <small> Phí vận chuyện COD : 25.00 đ </small>
                  )}
                </div>
              </div>
              <div>
                <h3>Phương thức thanh toán</h3>
                <div className={classes.FormGroup}>
                  <RadioGroup
                    value={payment_method}
                    onChange={(e) => {
                      setPaymentMethod(e.target.value);
                      setShowPaypalBtn(
                        e.target.value === "1" &&
                          name &&
                          address &&
                          phone_number &&
                          message
                      );
                    }}
                  >
                    <FormControlLabel
                      value='1'
                      control={<Radio />}
                      label='Chuyển khoản online'
                    />
                    <FormControlLabel
                      value='2'
                      control={<Radio />}
                      label='Thanh toán khi nhận hàng'
                    />
                    <FormControlLabel
                      value='3'
                      control={<Radio />}
                      label='Thanh toán bằng ví MoMo'
                    />
                  </RadioGroup>
                  {showPaypalBtn && (
                    <PaypalTransaction
                      total={total}
                      cartItems={cartItems}
                      receiverInfo={{
                        name,
                        address,
                        phone_number,
                        delivery_method,
                        payment_method,
                        message,
                      }}
                    />
                  )}
                </div>
              </div>
              <h3 className='mb-2'>Tổng tiền : {formatMoney(total)} đ </h3>
              <Button
                type='submit'
                variant='contained'
                color='primary'
                className='btn btn-secondary'
                disabled={!(name && address && phone_number)}
              >
                Xác nhận đặt hàng
              </Button>
              <Button
                variant='contained'
                color='secondary'
                onClick={() => history.push("/")}
              >
                Hủy
              </Button>
            </form>
          </div>
        </Grid>
        <Grid item md={4} xs={12}>
          <OrderSummary />
          <CartSubTotal subTotal={subTotal} tax={tax} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default Payment;
