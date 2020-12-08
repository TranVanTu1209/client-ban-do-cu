import React, { useState, useCallback } from 'react';
import classes from './CartSubtotal.module.css';
import { TextField, Typography, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setGiftCode } from '../../../store/actions/cart/cartAction';
import { formatMoney } from '../../../utils/formatMoney';

const CartSubTotal = ({ subTotal, code, tax, showCheckOutButton, showGiftCode }) => {
  const [gift, setGift] = useState(code || '');
  const history = useHistory();
  const dispatch = useDispatch();

  const onChangeGiftCode = useCallback(e => {
    setGift(e.target.value);
    dispatch(setGiftCode(e.target.value));
  }, [dispatch]);

  const onCheckOut = () => {
    history.push('/checkout');
  }
  return (
    <div className={classes.CartSubTotal}>
      {
        showGiftCode && <React.Fragment>
          <h4>Nhập mã khuyến mại</h4>
          <TextField placeholder="Mã khuyến mại..." fullWidth value={gift} onChange={onChangeGiftCode} />
          <Typography variant="body2" color="primary" style={{ marginTop: '10px' }}>
            Chọn hoặc nhập Khuyến mãi khác
          </Typography>
          <hr />
        </React.Fragment>
      }
      <div className={classes.SubAmount}>
        <span>Tạm tính</span>
        <Typography>
          {formatMoney(subTotal)} đ
      </Typography>
      </div>
      <div className={classes.SubAmount}>
        <span>Thuế</span>
        <Typography>
          {formatMoney(tax)} đ
      </Typography>
      </div>
      <div className={classes.SubAmount}>
        <span>Thành tiền</span>
        <Typography className={classes.Total} >
          {formatMoney(subTotal + tax)} đ
      </Typography>
      </div>
      {
        showCheckOutButton && <Button className={classes.CheckOutBtn} variant="contained"
          color="primary" fullWidth onClick={onCheckOut}>
          Tiến hành đặt hàng
      </Button>
      }
    </div>
  );
}

export default CartSubTotal;
