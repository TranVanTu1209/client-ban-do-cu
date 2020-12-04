import * as actionTypes from "../../actionTypes";
import { db } from "../../../firebase/firebase";
import { setAlert } from "../alert/alertAction";
import { clearCart } from "../cart/cartAction";
import axios from "../../api/axios";

export const createOrder = ({ cartItems, total }, receiverInfo, history) => (
  dispatch
) => {
  dispatch({
    type: actionTypes.ORDER_REQUEST,
  });
  const newOrder = {
    ...receiverInfo,
    products: cartItems.map((cI) => ({
      product_id: cI.id,
      number: cI.amount,
    })),
    amount: total,
  };
  axios
    .post("/order", newOrder, {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
    .then((res) => {
      dispatch(
        setAlert(
          "Đặt hàng thành công. Chúng tôi sẽ vận chuyển hàng đến với bạn sớm nhất có thể",
          "Success"
        )
      );
      dispatch({
        type: actionTypes.CREATE_ORDER,
        payload: res.data.data,
      });
      dispatch(clearCart());
      history.push("/orders");
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.ORDER_ERROR,
        payload: err.message,
      });
      dispatch(setAlert(err.message, "Danger"));
    });
};

export const fetchOrders = () => async (dispatch) => {
  dispatch({
    type: actionTypes.ORDER_REQUEST,
  });
  try {
    const res = await axios.get("/orders");
    dispatch({
      type: actionTypes.SET_ORDERS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.ORDER_ERROR,
      payload: error.message || "Lỗi xảy ra",
    });
    dispatch(setAlert(error.message || "Lỗi xảy ra", "Danger"));
  }
};

export const cancelOrder = (id) => async (dispatch) => {
  dispatch({
    type: actionTypes.ORDER_REQUEST,
  });
  try {
    await axios.post(
      "/cancel/order",
      {
        order_id: id,
      },
      {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      }
    );
    dispatch({
      type: actionTypes.CANCEL_ORDER,
      payload: id,
    });
    dispatch(setAlert("Hủy đơn thành công", "Success"));
  } catch (error) {
    dispatch({
      type: actionTypes.ORDER_ERROR,
      payload: error.message || "Lỗi xảy ra",
    });
    dispatch(setAlert(error.message || "Lỗi xảy ra", "Danger"));
  }
};

export const filterOrders = (type) => (dispatch, getState) => {
  const { email, uid } = getState().auth;
  dispatch({
    type: actionTypes.ORDER_REQUEST,
  });
  let ordersData;
  if (email === "admin@gmail.com") {
    ordersData = db
      .collection("orders")
      .where("receiverInfo.paymentMethod", "==", type);
  } else {
    ordersData = db
      .collection("orders")
      .where("user", "==", uid)
      .where("receiverInfo.paymentMethod", "==", type);
  }
  ordersData
    .get()
    .then((snapshot) => {
      const orders = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      dispatch({
        type: actionTypes.SET_ORDERS,
        payload: orders,
      });
    })
    .catch((err) => {
      dispatch(setAlert(err.message, "Danger"));
      dispatch({
        type: actionTypes.ORDER_ERROR,
        payload: err.message,
      });
    });
};

export const clearOrder = () => (dispatch) =>
  dispatch({ type: actionTypes.CLEAR_ORDER });

export const fetchOrdersByUserId = (id) => (dispatch) => {
  if (id === "all") {
    dispatch(fetchOrders());
  } else {
    dispatch({ type: actionTypes.ORDER_REQUEST });
    db.collection("orders")
      .where("user", "==", id)
      .get()
      .then((snapshot) => {
        const orders = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        dispatch({
          type: actionTypes.SET_ORDERS,
          payload: orders,
        });
      })
      .catch((err) => {
        dispatch(setAlert(err.message, "Danger"));
        dispatch({
          type: actionTypes.ORDER_ERROR,
          payload: err.message,
        });
      });
  }
};

export const transactionWithPaypal = () => (dispatch) => {};
