import React, { useState, useEffect } from 'react';
import classes from './Payment.module.css';
import { Grid, TextField, Button, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import CartSubTotal from '../Cart/CartSubtotal/CartSubTotal';
import { useSelector, useDispatch } from 'react-redux';
import OrderSummary from './OrderSummary/OrderSummary';
import { createOrder } from '../../store/actions/order/orderAction';
import Spinner from '../../components/UI/Spinner/Spinner';
import { useHistory } from 'react-router-dom';
import { getProfile } from '../../store/actions/user/authAction';
import PaypalTransaction from './PaypalTransaction/PaypalTransaction';

const Payment = () => {
  const dispatch = useDispatch();
  const { cart: { cartItems, subTotal, tax }, order: { loading }, auth: { profile, uid } } = useSelector(state => state);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('cod');
  const [paymentMethod, setPaymentMethod] = useState('check');
  const [message, setMessage] = useState('');
  const [showPaypalBtn, setShowPaypalBtn] = useState(false);
  const [total, setTotal] = useState(0);
  const history = useHistory();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  useEffect(() => {
    if (!profile) dispatch(getProfile(uid));
  }, [dispatch, profile, uid]);

  useEffect(() => {
    if (profile)
    {
      setName(profile.name);
      setAddress(profile.address);
      setPhoneNumber(profile.phoneNumber);
    }
  }, [profile]);

  useEffect(() => {
    setTotal(deliveryMethod === 'cod' ? (subTotal + tax + 25) : (subTotal + tax));
  }, [deliveryMethod, subTotal, tax]);

  const onConfirmCheckout = e => {
    e.preventDefault();
    const receiverInfo = { name, address, phoneNumber, postalCode, deliveryMethod, paymentMethod, message };
    dispatch(createOrder({ cartItems, total }, receiverInfo, history));
  }
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
                  <TextField fullWidth placeholder="Họ tên người nhận" value={name}
                    onChange={e => setName(e.target.value)} />
                </div>
                <div className={classes.FormGroup}>
                  <TextField fullWidth placeholder="Địa chỉ người nhận" value={address}
                    onChange={e => setAddress(e.target.value)} />
                </div>
                <div className={classes.FormGroup}>
                  <TextField fullWidth placeholder="Số điện thoại người nhận" value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)} />
                </div>
                <div className={classes.FormGroup}>
                  <TextField fullWidth placeholder="Mã bưu điện" value={postalCode}
                    onChange={e => setPostalCode(e.target.value)} />
                </div>
                <div className={classes.FormGroup}>
                  <TextField fullWidth placeholder="Ghi chú" value={message} multiline rows={3}
                    onChange={e => setMessage(e.target.value)} />
                </div>
              </div>
              <div>
                <h3>Phương thức vận chuyển</h3>
                <div className={classes.FormGroup}>
                  <RadioGroup value={deliveryMethod} onChange={e => setDeliveryMethod(e.target.value)}>
                    <FormControlLabel value="cod" control={<Radio />} label="Ship COD" />
                    <FormControlLabel value="onsite" control={<Radio />} label="Nhận hàng tại cửa hàng" />
                  </RadioGroup>
                  {
                    deliveryMethod === 'cod' && <small> Phí vận chuyện COD  : 25.00 đ </small>
                  }
                </div>
              </div>
              <div>
                <h3>Phương thức thanh toán</h3>
                <div className={classes.FormGroup}>
                  <RadioGroup value={paymentMethod} onChange={e => {
                    setPaymentMethod(e.target.value);
                    setShowPaypalBtn(e.target.value === 'bank');
                  }}>
                    <FormControlLabel value="bank" control={<Radio />} label="Chuyển khoản online" />
                    <FormControlLabel value="check" control={<Radio />} label="Thanh toán khi nhận hàng" />
                  </RadioGroup>
                  {
                    showPaypalBtn && name && address && phoneNumber && postalCode && <PaypalTransaction total={total} cartItems={cartItems}
                      receiverInfo={{ name, address, phoneNumber, postalCode, deliveryMethod, paymentMethod, message }} />
                  }
                </div>
              </div>
              <h3 className="mb-2">Tổng tiền : {total.toFixed(2)} đ </h3>
              <Button type="submit" variant="contained" color="primary" className="btn btn-secondary"
                disabled={!(name && address && phoneNumber && postalCode)}>
                Xác nhận đặt hàng
              </Button>
              <Button variant="contained" color="secondary" onClick={() => history.push('/')}>
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
}
export default Payment;



