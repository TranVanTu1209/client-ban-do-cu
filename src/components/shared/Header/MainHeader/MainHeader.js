import React from 'react';
import classes from './MainHeader.module.css';
import Logo from '../../../UI/Logo/Logo';
import SearchProduct from '../../../FormElement/SearchProduct/SearchProduct';
import { Streetview as StreetviewIcon, Notifications as NotificationsIcon, Person as PersonIcon } from '@material-ui/icons';
import { Link, useHistory } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../../../../firebase/firebase';
import { logout } from '../../../../store/actions/user/authAction';

const MainHeader = () => {
  const history = useHistory();
  const { auth: { isAuthenticated }, product: { products }, cart: { cartItems } } = useSelector(state => state);
  const dispatch = useDispatch();

  const onLogout = () => {
    auth.signOut().then(() => {
      dispatch(logout());
      history.push('/login');
    });
  }
  const publicLinks = <React.Fragment>
    <div className={classes.MainHeaderRight__Option}>
      <Link to="/login">
        <p> Đăng nhập </p>
        <span>Mua sắm ngay</span>
      </Link>
    </div>
  </React.Fragment>;

  const userAuthLinks = <React.Fragment>
    <div className={classes.MainHeaderRight__Option}>
      <Link to="/orders">
        <StreetviewIcon />
        <span className={classes.RightTitle}>Theo dõi đơn hàng</span>
      </Link>
    </div>
    <div className={classes.MainHeaderRight__Option}>
      <Link to="/orders">
        <NotificationsIcon />
        <span className={classes.RightTitle}>Thông báo của tôi</span>
      </Link>
    </div>
    <div className={classes.MainHeaderRight__Option}>
      <PersonIcon />
      <div>
        <Link to='/profile'>
          {/* Chào {email.split('@')[0]} */}
        </Link>
        <p onClick={onLogout}>Thoát</p>
      </div>
    </div>
    <div className={classes.MainHeaderRight__Option}>
      <Link to="/cart" className={classes.CartButton}>
        <ShoppingCartIcon /> Giỏ hàng <span className="badge badge-yellow"> {cartItems.length}</span>
      </Link>
    </div>
  </React.Fragment>;

  const adminLinks = <React.Fragment>
    <div className={classes.MainHeaderRight__Option}>
      <Link to="/orders">
        <StreetviewIcon />
        <span className={classes.RightTitle}>Theo dõi đơn hàng</span>
      </Link>
    </div>
    <div className={classes.MainHeaderRight__Option}>
      <Link to="/orders">
        <NotificationsIcon />
        <span className={classes.RightTitle}>Thông báo của tôi</span>
      </Link>
    </div>
    <div className={classes.MainHeaderRight__Option}>
      <PersonIcon />
      <div>
        <Link to='/profile'>
          {/* Chào {email.split('@')[0]} */}
        </Link>
        <p onClick={onLogout}>Thoát</p>
      </div>
    </div>
    <div className={classes.MainHeaderRight__Option}>
      <Link to="/new/product" className={classes.CartButton}>
        Sản phẩm <span className="badge badge-yellow"> {products.length}</span>
      </Link>
    </div>
  </React.Fragment>;

  return (
    <div className={classes.MainHeaderWrapper}>
      <div className="container">
        <div className={classes.MainHeader}>
          <div className={classes.MainHeaderLogo} >
            <Logo color="#ffffff" />
          </div>
          <div className={classes.MainHeaderCenter}>
            <SearchProduct />
          </div>
          <div className={classes.MainHeaderRight}>
            {
              !isAuthenticated ? publicLinks :
                <React.Fragment>
                  {/* {
                    email === 'admin@gmail.com' && adminLinks
                  }
                  {
                    email !== 'admin@gmail.com' && userAuthLinks
                  } */}
                </React.Fragment>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
