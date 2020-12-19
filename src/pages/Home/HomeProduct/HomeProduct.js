import React, { useState } from "react";
import classes from "./HomeProduct.module.css";
import HomeProductDetail from "../HomeProductDetail/HomeProductDetail";
import Badge from "../../../components/UI/Badge/Badge";
import {
  formatProductTitle,
  calculateReductionPercentage,
} from "../../../utils/products/products";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../store/actions/cart/cartAction";
import { formatMoney } from "../../../utils/formatMoney";

const HomeProduct = ({ product }) => {
  const dispatch = useDispatch();
  const [showProductDetail, setShowProductDetail] = useState(false);
  const closeModal = () => setShowProductDetail(false);
  const openModal = () => setShowProductDetail(true);

  console.log(product);

  return (
    <React.Fragment>
      <div className={classes.HomeProduct}>
        <div className={classes.ReductionTag}>
          <Badge
            text={calculateReductionPercentage(
              product.price,
              product.originPrice
            )}
            type='Danger'
          />
        </div>
        <img
          src={
            product.image ||
            "https://salt.tikicdn.com/cache/280x280/ts/product/bd/de/40/f9cf4776701057cbce1476fc725364b2.jpg"
          }
          onClick={openModal}
          alt={product.title}
        />
        <div>
          <p className={classes.Title} onClick={openModal}>
            {formatProductTitle(product.name)}
          </p>
          <div className={classes.Prices}>
            <strong> {formatMoney(product.price)} đ </strong>
            <p className='line-through'>{formatMoney(product.originPrice)} đ</p>
          </div>
        </div>
        <React.Fragment>
          {+product.number < 1 ? (
            <div className={classes.SoldOutCard}>Đã hết hàng</div>
          ) : (
            <button
              className={classes.AddToCartBtn}
              onClick={() => dispatch(addItemToCart(product))}
            >
              Thêm vào giỏ
            </button>
          )}
        </React.Fragment>
      </div>
      {showProductDetail && (
        <HomeProductDetail
          product={product}
          show={showProductDetail}
          close={closeModal}
        />
      )}
    </React.Fragment>
  );
};

export default HomeProduct;
