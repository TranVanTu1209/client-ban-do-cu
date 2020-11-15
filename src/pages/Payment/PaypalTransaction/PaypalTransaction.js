import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createOrder } from '../../../store/actions/order/orderAction';
import { setAlert } from '../../../store/actions/alert/alertAction';
import { useHistory } from 'react-router-dom';

const PaypalTransaction = ({ total, receiverInfo, cartItems }) => {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const paypalRef = useRef();
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    window.paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: 'Thanh toán đơn đặt hàng từ tiki.vn',
              amount: {
                currency_code: 'USD',
                value: Number(total.toFixed(2)),
              },
            },
          ],
        });
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture();
        setPaidFor(true);
        dispatch(createOrder({ cartItems, total }, { ...receiverInfo, paypalInfo: order }, history));
        localStorage.setItem('orderDataJson', JSON.stringify({ cartItems, total, ...receiverInfo, paypalInfo: order }));
      },
      onError: err => {
        setError(err);
        dispatch(setAlert('Thanh toán bằng paypal thất bại', 'Danger'));
        history.goBack();
      }
    }).render(paypalRef.current);
  }, [cartItems, dispatch, history, receiverInfo, total]);
  return (
    <div>
      {error && <div>Uh oh, an error occurred! {error.message}</div>}
      {paidFor && <p>Thanh toán thành công</p>}
      <div ref={paypalRef} />
    </div>
  );
}
export default PaypalTransaction;
