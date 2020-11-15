import React from 'react';
import classes from './HomeProductDetail.module.css';
import Modal from '../../../components/UI/Modal/Modal';
import Backdrop from '../../../components/UI/Backdrop/Backdrop';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart } from '../../../store/actions/cart/cartAction';

const HomeProductDetail = ({ show, close, product }) => {
  const dispatch = useDispatch();
  const { email } = useSelector(state => state.auth);

  return (
    <React.Fragment>
      <Backdrop show={show} clicked={close} />
      <Modal show={show}>
        <button className="btn" style={{ float: 'right' }} onClick={close}>
          <CloseIcon />
        </button>
        <div className={classes.HomeProductDetail}>
          <img src={product.image} alt={product.title} />
          <div className={classes.RightInfo}>
            <p> {product.title} </p>
            <p>
              Giá khuyến mại : <strong> {product.price} đ </strong>
            </p>
            <p>
              Giá cũ <span className="line-through"> {product.originPrice} đ </span>
            </p>
            <p>
              {
                product.description ? product.description : 'No description'
              }
            </p>
            <p className="text-red">Freeship khi đặt hàng 2 sản phẩm trở lên</p>
            {
              email !== 'admin@gmail.com' && <React.Fragment>
                {
                  product.soldOut ? <span className="badge badge-yellow">Đã hết hàng</span> :
                    <button className="btn btn-secondary" onClick={() => dispatch(addItemToCart(product))}>Thêm vào giỏ</button>
                }
              </React.Fragment>
            }
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
}

export default HomeProductDetail;
