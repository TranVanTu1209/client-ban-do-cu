import React from 'react';
import classes from './GetPromotionForm.module.css';

const GetPromotionForm = () => {
  return (
    <form className={classes.GetPromotionForm} >
      <input type="text" placeholder="Địa chỉ email của bạn" />
      <button className="btn btn-primary">Đăng ký</button>
    </form>
  )
}

export default GetPromotionForm;
