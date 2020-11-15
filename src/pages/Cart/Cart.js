import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import classes from './Cart.module.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import CartProductItem from './CartProductItem/CartProductItem';
import EmailPromotion from '../../components/shared/EmailPromotion/EmailPromotion';
import CartSubTotal from './CartSubtotal/CartSubTotal';
import { useSelector } from 'react-redux';
import EmptyCart from './EmptyCart/EmptyCart';
import FlipMove from 'react-flip-move';

const Cart = () => {
  const { cartItems, subTotal, tax, giftCode } = useSelector(state => state.cart)
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    }
  }, []);
  const cartItemsMarkup = cartItems?.map(item => <CartProductItem key={item.id} item={item} />);
  return (
    <React.Fragment>
      {
        showSpinner && <Spinner />
      }
      <div className={classes.Cart}>
        <h3>Giỏ hàng <span>({cartItems.length} sản phẩm)</span> </h3>
        {
          cartItems.length > 0 ? <Grid container spacing={2}>
            <Grid item md={8}>
              {
                <FlipMove>
                  {cartItemsMarkup}
                </FlipMove>
              }
            </Grid>
            <Grid item md={4}>
              {
                <CartSubTotal subTotal={subTotal} tax={tax} code={giftCode} showCheckOutButton showGiftCode />
              }
            </Grid>
          </Grid> : <EmptyCart />
        }
      </div>
      <EmailPromotion />
    </React.Fragment>
  );
}

export default Cart;
