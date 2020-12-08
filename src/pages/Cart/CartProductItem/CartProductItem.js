import React, { forwardRef } from 'react';
import classes from './CartProductItem.module.css';
import { Grid, Button, ButtonGroup } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useDispatch } from 'react-redux';
import { removeItemFromCart, increaseAmount, decreaseAmount } from '../../../store/actions/cart/cartAction';
import { formatMoney } from '../../../utils/formatMoney';

const CartProductItem = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const { item: { id, amount, image, name, price, originPrice, number } } = props;
  return (
    <div className={classes.CartProductItem} ref={ref}>
      <Grid container spacing={2}>
        <Grid item md={8}>
          <div className={classes.Left}>
            <img src={image} alt={name} />
            <div className={classes.Info}>
              <p className={classes.Title}>
                {name}
              </p>
              <p className={classes.Delivery}>GIAO NHANH 2H</p>
              <p className={classes.CountInStock}>
                Chỉ còn { number } sản phẩm
              </p>
              <button onClick={() => dispatch(removeItemFromCart(id))}>
                Xóa
              </button>
            </div>
          </div>
        </Grid>
        <Grid item md={4}>
          <div className={classes.Right}>
            <div>
              <p>
                {formatMoney(price)} đ/sp
              </p>
              <p className="line-through"> {formatMoney(originPrice)} đ/sp </p>
            </div>
            <ButtonGroup size="small" aria-label="small outlined button group">
              <Button size="small" disabled={!(amount > 1)} onClick={() => dispatch(decreaseAmount(id))}>
                <RemoveIcon />
              </Button>
              <Button size="small" disabled> {amount} </Button>
              <Button size="small" disabled={(+number === amount)} onClick={() => dispatch(increaseAmount(id))}>
                <AddIcon />
              </Button>
            </ButtonGroup>
          </div>
        </Grid>
      </Grid>
    </div>
  );
})

export default CartProductItem;
