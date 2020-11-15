import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from '../../components/shared/Footer/Footer';
import Header from '../../components/shared/Header/Header';
import _404 from '../../pages/_404/_404';
import LazyWrapper from '../../utils/hoc/LazyWrapper';
const Home = React.lazy(() => import('../../pages/Home/Home'));
const CategoryProducts = React.lazy(() => import('../../pages/CategoryProducts/CategoryProducts'));
const Orders = React.lazy(() => import('../../pages/Orders/Orders'));
const Profile = React.lazy(() => import('../../pages/Profile/Profile'));
const Checkout = React.lazy(() => import('../../pages/Payment/Payment'));
const Cart = React.lazy(() => import('../../pages/Cart/Cart'));

const AuthLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <LazyWrapper> <Home /> </LazyWrapper>
          </Route>
          <Route path="/categories/:cateId">
            <LazyWrapper> <CategoryProducts /> </LazyWrapper>
          </Route>
          <Route path="/cart">
            <LazyWrapper> <Cart /> </LazyWrapper>
          </Route>
          <Route path="/orders">
            <LazyWrapper> <Orders /> </LazyWrapper>
          </Route>
          <Route path="/checkout">
            <LazyWrapper> <Checkout /> </LazyWrapper>
          </Route>
          <Route path="/profile">
            <LazyWrapper> <Profile /> </LazyWrapper>
          </Route>
          <Route component={_404} />
        </Switch>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default AuthLayout;
