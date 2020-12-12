import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Footer from "../../components/shared/Footer/Footer";
import Header from "../../components/shared/Header/Header";
import LazyWrapper from "../../utils/hoc/LazyWrapper";
const Login = React.lazy(() => import("../../pages/Login/Login"));
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
          <Route path='/login'>
            <LazyWrapper>
              <Login />
            </LazyWrapper>
          </Route>
          <Route render={() => <Redirect to='/' />} />
        </Switch>
      </div>
      <Footer />
    </Fragment>
  );
};

export default PublicLayout;
