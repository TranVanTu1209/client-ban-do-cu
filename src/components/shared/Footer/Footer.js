import React, { useState } from 'react';
import classes from './Footer.module.css';
import FooterRow from './FooterRow/FooterRow';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
  const [paymentMethods] = useState([
    {
      id: '1',
      image: 'https://cdn.iconscout.com/icon/free/png-512/visa-3-226460.png'
    },
    {
      id: '2',
      image: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/206_Mastercard_Credit_Card_logo_logos-512.png'
    },
    {
      id: '3',
      image: 'https://cdn1.iconfinder.com/data/icons/banking-and-finance-35/64/Internet-banking-512.png'
    }
  ])
  return (
    <div className={classes.Footer}>
      <FooterRow title="HỖ TRỢ KHÁCH HÀNG" linkItems={['Các câu hỏi thường gặp', 'Gửi yêu cầu hỗ trợ',
        'Hướng dẫn đặt hàng', 'Các câu hỏi thường gặp', 'Gửi yêu cầu hỗ trợ',
        'Hướng dẫn đặt hàng']}>
        <div>
          <p className="text-red lead">
            Hotline chăm sóc khách hàng: 1900-6035
          </p>
          <small>(1000đ/phút , 8-21h kể cả T7, CN)</small>
        </div>
      </FooterRow>
      <FooterRow title="VỀ CHÚNG TÔI" linkItems={['Giới thiệu shop', 'Tuyển Dụng', 'Chính sách bảo mật thanh toán',
        'Chính sách bảo mật thông tin cá nhân', 'Chính sách giải quyết khiếu nại', 'Điều khoản sử dụng',
        'Giới thiệu Tiki Xu', 'Bán hàng doanh nghiệp']}>
      </FooterRow>
      <FooterRow title="HỢP TÁC VÀ LIÊN KẾT" linkItems={['Quy chế hoạt động Sàn GDTMĐT', 'Bán hàng cùng Tiki']}>
      </FooterRow>
      <FooterRow title="PHƯƠNG THỨC THANH TOÁN">
        <div className={classes.PaymentMethods} >
          {
            paymentMethods.map(p => <img key={p.id} src={p.image} alt={p.image} />)
          }
        </div>
      </FooterRow>
      <FooterRow title="KẾT NỐI VỚI CHÚNG TÔI">
        <div className={classes.FooterSocialConnect}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" >
            <FacebookIcon fontSize="large" color="primary" />
          </a>
          <YouTubeIcon fontSize="large" color="secondary" />
          <LinkedInIcon fontSize="large" color="primary" />
        </div>
        <div className={classes.FooterDownloads}>
          <h3>
            TẢI ỨNG DỤNG TRÊN ĐIỆN THOẠI
          </h3>
          <img src="https://www.sweego.vn/assets/appstore.png" alt="app store " />
          <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="google play " />
        </div>
      </FooterRow>
    </div>
  );
}

export default Footer;
