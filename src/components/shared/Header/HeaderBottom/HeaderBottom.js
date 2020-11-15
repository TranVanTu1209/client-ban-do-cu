import React from 'react';
import classes from './HeaderBottom.module.css';
import MenuIcon from '@material-ui/icons/Menu';
import RoomIcon from '@material-ui/icons/Room';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import HeaderBottomMedia from './HeaderBottomMedia/HeaderBottomMedia';

const HeaderBottom = () => {
  return (
    <div className={classes.HeaderBottomWrapper}>
      <div className="container">
        <div className={classes.HeaderBottom}>
          <HeaderBottomMedia Icon={MenuIcon} title="DANH MỤC SẢN PHẨM" longTitle />
          <HeaderBottomMedia Icon={RoomIcon} title="Phường Trung Hòa, Cầu Giấy" titleSmall />
          <HeaderBottomMedia Icon={KeyboardArrowDownIcon} title="Sản phẩm bạn đã xem" titleSmall />
          <HeaderBottomMedia Icon={LoyaltyIcon} title="Hoàn tiền 15% nếu hàng bị lỗi" titleSmall />
          <HeaderBottomMedia Icon={FastfoodIcon} title="Giao nhanh 2h & hôm sau" titleSmall />
          <HeaderBottomMedia Icon={EmojiFoodBeverageIcon} title="Thực phẩm sạch, tươi sống" titleSmall />
          <HeaderBottomMedia Icon={VerifiedUserIcon} title="Sản phẩm chính hiệu" titleSmall />
          <HeaderBottomMedia Icon={AutorenewIcon} title="30 ngày đổi trả ko mất phí" titleSmall />
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
