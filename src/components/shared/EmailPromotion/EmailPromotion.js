import React from 'react';
import { useSelector } from 'react-redux';
import GetPromotionForm from '../../FormElement/GetPromotionForm/GetPromotionForm';
import classes from './EmailPromotion.module.css';

const EmailPromotion = () => {
  const { uid } = useSelector(state => state.auth);
  return uid ? null : (
    <div className={classes.EmailPromotion}>
      <div className={classes.Left}>
        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/newsletter.png" alt="Email Icon" />
        <div>
          <h5>Đăng ký nhận bản tin Tiki</h5>
          <p>Đừng bỏ lỡ hàng ngàn sản phẩm và chương trình siêu hấp dẫn</p>
        </div>
      </div>
      <div className={classes.Right}>
        <GetPromotionForm />
      </div>
    </div>
  );
}
export default EmailPromotion;
