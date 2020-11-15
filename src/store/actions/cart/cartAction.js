import * as actionTypes from '../../actionTypes';
import { setAlert } from '../alert/alertAction';
import store from '../../store';
import { checkExist } from '../../../utils/carts/checkProductExist';

export const addItemToCart = (product) => (dispatch, getState) => {
  const { cartItems } = getState().cart;
  if (checkExist(product.id, cartItems))
  {
    dispatch(increaseAmount(product.id));
  } else
  {
    dispatch(setAlert('Đã thêm sản phẩm vào giỏ, Vui lòng tiến hành thanh toán ', 'Success'));
    const action = {
      type: actionTypes.ADD_TO_CART,
      payload: product
    }
    dispatch(action);
    persistCartData();
  }
}

export const removeItemFromCart = (id) => dispatch => {
  if (id)
  {
    dispatch({
      type: actionTypes.REMOVE_FROM_CART,
      payload: id
    });
    dispatch(setAlert('Xóa sản phẩm thành công', 'Success'));
    persistCartData();
    const cartItems = store.getState().cart.cartItems;
    if (cartItems.length === 0)
    {
      clearCart();
    }
  } else
  {
    dispatch(setAlert('Không thể xóa sản phẩm! Vui lòng thử lại', 'Danger'));
  }
}

export const increaseAmount = (id) => dispatch => {
  dispatch({
    type: actionTypes.INCREASE_AMOUNT,
    payload: id
  });
  dispatch(setAlert('Đã thêm sản phẩm vào giỏ, Vui lòng tiến hành thanh toán ', 'Success'));
  persistCartData();
}

export const decreaseAmount = (id) => dispatch => {
  dispatch({
    type: actionTypes.DECREASE_AMOUNT,
    payload: id
  });
  dispatch(setAlert('Loại bỏ sản phẩm thành công', 'Success'));
  persistCartData();
}

export const clearCart = () => dispatch => {
  dispatch({
    type: actionTypes.CLEAR_CART
  });
  localStorage.removeItem('cartData');
}

export const setCartDataFromStorage = () => dispatch => {
  if (localStorage.getItem('cartData'))
  {
    const cartData = JSON.parse(localStorage.getItem('cartData'));
    dispatch({
      type: actionTypes.SET_CART_DATA,
      payload: cartData
    });
  }
}

export const setGiftCode = code => dispatch => {
  dispatch({
    type: actionTypes.SET_GIFT_CODE,
    payload: code
  });
  persistCartData();
}

export const persistCartData = () => {
  const cartData = store.getState().cart;
  localStorage.setItem('cartData', JSON.stringify(cartData));
}