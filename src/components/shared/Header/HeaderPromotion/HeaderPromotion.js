import React from 'react';
import classes from './HeaderPromotion.module.css';
import AssistantIcon from '@material-ui/icons/Assistant';
import TitleIcon from '@material-ui/icons/Title';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import LanguageIcon from '@material-ui/icons/Language';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import HeaderPromotionItem from './HeaderPromotionItem/HeaderPromotionItem';

const HeaderPromotion = () => {
  return (
    <div className={classes.HeaderPromotionWrapper}>
      <div className="container">
        <div className={classes.HeaderPromotion}>
          <HeaderPromotionItem Icon={TitleIcon} title="Ticket Box"
            urlPath="https://tiki.vn" showNotification={false} />
          <HeaderPromotionItem Icon={AssistantIcon} title="Trợ lý Shop"
            urlPath="https://tiki.vn" showNotification={false} />
          <HeaderPromotionItem Icon={AttachMoneyIcon} title="Ưu đãi đối tác"
            urlPath="https://tiki.vn" showNotification={false} />
          <HeaderPromotionItem Icon={AirplanemodeActiveIcon} title="Đặt vé máy bay"
            urlPath="https://tiki.vn" showNotification={false} />
          <HeaderPromotionItem Icon={WhatshotIcon} title="Khuyến mại hot"
            urlPath="https://tiki.vn" showNotification={false} />
          <HeaderPromotionItem Icon={LanguageIcon} title="Hàng quốc tế"
            urlPath="https://tiki.vn" showNotification={false} />
          <HeaderPromotionItem Icon={MonetizationOnIcon} title="Bán hàng cùng Shop"
            urlPath="https://tiki.vn" showNotification={false} />
        </div>
      </div>
    </div>

  );
}

export default HeaderPromotion;
