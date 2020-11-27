import { Grid } from '@material-ui/core';
import React from 'react';
import { Switch,Route, Redirect } from 'react-router-dom';
import Header from '../../components/admin/Header/Header';
import SideMenu from '../../components/admin/SideMenu/SideMenu';
import Home from '../../pages/admin/Home/Home';
import Products from '../../pages/admin/Products/Products';
import Orders from '../../pages/Orders/Orders';
import _404 from '../../pages/_404/_404';
import LazyWrapper from '../../utils/hoc/LazyWrapper';

const VendorLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="lg-container mt-2">
        <Grid container spacing={3}>
          <Grid item md={2}>
            <SideMenu />
          </Grid>
          <Grid item md={10}>
            <Switch>
              <Route exact path="/">
                <LazyWrapper> <Home /> </LazyWrapper>
              </Route>
              <Route path="/dashboard/order">
                <LazyWrapper> <Orders /> </LazyWrapper>
              </Route>
              <Route path="/dashboard/product">
                <LazyWrapper> <Products /> </LazyWrapper>
              </Route>
              <Route path="/login">
                <Redirect to="/"/>
              </Route>
              <Route component={_404} />
            </Switch>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  )
}

export default VendorLayout;
