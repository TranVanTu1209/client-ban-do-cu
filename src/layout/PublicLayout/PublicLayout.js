import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "../../components/shared/Footer/Footer";
import Header from "../../components/shared/Header/Header";
import Login from "../../pages/Login/Login";
import _404 from "../../pages/_404/_404";
import LazyWrapper from "../../utils/hoc/LazyWrapper";
const Home = React.lazy(() => import("../../pages/Home/Home"));
const Cart = React.lazy(() => import("../../pages/Cart/Cart"));
const CategoryProducts = React.lazy(() =>
  import("../../pages/CategoryProducts/CategoryProducts")
);

const PublicLayout = () => {
  return (
    <Fragment>
      <Header />
      <div className='container'>
        <Switch>
          <Route path='/' exact>
            <LazyWrapper>
              <Home />
            </LazyWrapper>
          </Route>
          <Route path='/categories/:cateId'>
            <LazyWrapper>
              <CategoryProducts />
            </LazyWrapper>
          </Route>
          <Route path='/cart'>
            <LazyWrapper>
              <Cart />
            </LazyWrapper>
          </Route>
          <Route path='/login' component={Login} />
          <Route component={_404} />
        </Switch>
      </div>
      <Footer />
    </Fragment>
  );
};

export default PublicLayout;
