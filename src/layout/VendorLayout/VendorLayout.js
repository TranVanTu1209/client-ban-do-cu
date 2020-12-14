import { Grid } from "@material-ui/core";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "../../components/admin/Header/Header";
import SideMenu from "../../components/admin/SideMenu/SideMenu";
import { useSelector } from "react-redux";
import _404 from "../../pages/_404/_404";
import LazyWrapper from "../../utils/hoc/LazyWrapper";
const Home = React.lazy(() => import("../../pages/admin/Home/Home"));
const Products = React.lazy(() =>
  import("../../pages/admin/Products/Products")
);
const Orders = React.lazy(() => import("../../pages/Orders/Orders"));
const Profit = React.lazy(() => import("../../pages/stats/Profit"));
const NewProduct = React.lazy(() =>
  import("../../pages/admin/NewProduct/NewProduct")
);

const VendorLayout = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <React.Fragment>
      <Header />
      <div className='lg-container mt-2'>
        <Grid container>
          <Grid item md={2}>
            <SideMenu showProfitLink />
          </Grid>
          <Grid item md={10}>
            <Switch>
              <Route exact path='/'>
                <LazyWrapper>
                  <Home />
                </LazyWrapper>
              </Route>
              <Route path='/dashboard/order'>
                <LazyWrapper>
                  <Orders />
                </LazyWrapper>
              </Route>
              <Route path='/dashboard/product/new'>
                <LazyWrapper>
                  <NewProduct />
                </LazyWrapper>
              </Route>
              <Route path='/dashboard/product'>
                <LazyWrapper>
                  <Products />
                </LazyWrapper>
              </Route>
              <Route path='/dashboard/profit'>
                <LazyWrapper>
                  <Profit />
                </LazyWrapper>
              </Route>
              <Route path='/login'>
                <Redirect to='/' />
              </Route>
              {isAuthenticated && <Route component={_404} />}
            </Switch>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default VendorLayout;
