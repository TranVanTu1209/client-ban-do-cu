import React, { useState } from 'react';
import classes from './HomeProduct.module.css';
import HomeProductDetail from '../HomeProductDetail/HomeProductDetail';
import Badge from '../../../components/UI/Badge/Badge';
import { formatProductTitle, calculateReductionPercentage } from '../../../utils/products/products';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../../store/actions/cart/cartAction';

const HomeProduct = ({ product }) => {
  const dispatch = useDispatch();
  const { email } = useSelector(state => state.auth);
  const [showProductDetail, setShowProductDetail] = useState(false);
  const closeModal = () => setShowProductDetail(false);
  const openModal = () => setShowProductDetail(true);

  return (
    <React.Fragment>
      <div className={classes.HomeProduct}>
        <div className={classes.ReductionTag}>
          <Badge text={calculateReductionPercentage(product.price, product.originPrice)} type="Danger" />
        </div>
        <img src={product.image} alt={product.title} />
        <div>
          <p className={classes.Title} onClick={openModal}>
            {
              formatProductTitle(product.title)
            }
          </p>
          <div className={classes.Prices} >
            <strong> {product.price} đ </strong> <span className="line-through"> {product.originPrice} đ </span>
          </div>
        </div>
        {
          email !== 'admin@gmail.com' && <React.Fragment>
            {
              product.soldOut ? <div className={classes.SoldOutCard}>Đã hết hàng</div> :
                <button className={classes.AddToCartBtn} onClick={() => dispatch(addItemToCart(product))}>Thêm vào giỏ </button>
            }
          </React.Fragment>
        }
      </div>
      {
        showProductDetail && <HomeProductDetail product={product} show={showProductDetail} close={closeModal} />
      }
    </React.Fragment>
  );
}

export default HomeProduct;
