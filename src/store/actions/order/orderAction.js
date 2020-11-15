import * as actionTypes from '../../actionTypes';
import { db } from '../../../firebase/firebase';
import { setAlert } from '../alert/alertAction';
import { clearCart } from '../cart/cartAction';

export const createOrder = ({ cartItems, total }, receiverInfo, history) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.ORDER_REQUEST
  });
  const auth = getState().auth;
  const newOrder = {
    receiverInfo,
    cartItems,
    total,
    user: auth.uid
  };
  db.collection('orders').add(newOrder).then((order) => {
    dispatch(setAlert('Đặt hàng thành công. Chúng tôi sẽ vận chuyển hàng đến với bạn sớm nhất có thể', 'Success'));
    dispatch({
      type: actionTypes.CREATE_ORDER,
      payload: {
        id: order.id,
        ...newOrder
      }
    });
    dispatch(fetchOrders());
    dispatch(clearCart());
    history.push('/orders');
  }).catch(err => {
    dispatch({
      type: actionTypes.ORDER_ERROR,
      payload: err.message
    });
    dispatch(setAlert(err.message, 'Danger'));
  });
}

export const fetchOrders = () => (dispatch, getState) => {
  const auth = getState().auth;
  dispatch({
    type: actionTypes.ORDER_REQUEST
  });
  let ordersData;
  if (auth.email === 'admin@gmail.com')
  {
    ordersData = db.collection('orders');
  } else
  {
    ordersData = db.collection('orders').where('user', '==', auth.uid);
  }
  ordersData.get().then(snapshot => {
    const orders = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    dispatch({
      type: actionTypes.SET_ORDERS,
      payload: orders
    });
  }).catch(err => {
    dispatch(setAlert(err.message, 'Danger'));
    dispatch({
      type: actionTypes.ORDER_ERROR,
      payload: err.message
    });
  });
}

export const cancelOrder = (id) => (dispatch) => {
  dispatch({
    type: actionTypes.ORDER_REQUEST
  });
  db.collection('orders').doc(id).delete()
    .then(() => {
      dispatch({
        type: actionTypes.CANCEL_ORDER,
        payload: id
      });
      dispatch(setAlert('Hủy đơn thành công', 'Success'));
    }).catch(err => {
      dispatch(setAlert(err.message, 'Danger'));
      dispatch({
        type: actionTypes.ORDER_ERROR,
        payload: err.message
      });
    });
}

export const filterOrders = (type) => (dispatch, getState) => {
  const { email, uid } = getState().auth;
  dispatch({
    type: actionTypes.ORDER_REQUEST
  });
  let ordersData;
  if (email === 'admin@gmail.com')
  {
    ordersData = db.collection('orders').where('receiverInfo.paymentMethod', '==', type);
  } else
  {
    ordersData = db.collection('orders').where('user', '==', uid).where('receiverInfo.paymentMethod', '==', type);
  }
  ordersData.get().then(snapshot => {
    const orders = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    dispatch({
      type: actionTypes.SET_ORDERS,
      payload: orders
    });
  }).catch(err => {
    dispatch(setAlert(err.message, 'Danger'));
    dispatch({
      type: actionTypes.ORDER_ERROR,
      payload: err.message
    });
  });
}

export const clearOrder = () => dispatch => dispatch({ type: actionTypes.CLEAR_ORDER });

export const fetchOrdersByUserId = (id) => dispatch => {
  if (id === 'all')
  {
    dispatch(fetchOrders());
  } else
  {
    dispatch({ type: actionTypes.ORDER_REQUEST });
    db.collection('orders').where('user', '==', id).get()
      .then(snapshot => {
        const orders = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        dispatch({
          type: actionTypes.SET_ORDERS,
          payload: orders
        });
      }).catch(err => {
        dispatch(setAlert(err.message, 'Danger'));
        dispatch({
          type: actionTypes.ORDER_ERROR,
          payload: err.message
        });
      });
  }
}

export const transactionWithPaypal = () => dispatch => {

}