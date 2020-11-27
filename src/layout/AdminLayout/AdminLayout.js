import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import _404 from '../../pages/_404/_404';
import { Grid } from '@material-ui/core';
import Header from '../../components/admin/Header/Header';
import SideMenu from '../../components/admin/SideMenu/SideMenu';
import LazyWrapper from '../../utils/hoc/LazyWrapper';
import EditCategory from '../../pages/admin/EditCategory/EditCategory';
const Orders = React.lazy(() => import('../../pages/Orders/Orders'));
const Customers = React.lazy(() => import('../../pages/admin/Customers/Customers'));
const Categories = React.lazy(() => import('../../pages/admin/Categories/Categories'));
const NewCategory = React.lazy(() => import('../../pages/admin/NewCategory/NewCategory'));
const Products = React.lazy(() => import('../../pages/admin/Products/Products'));
const Home = React.lazy(() => import('../../pages/admin/Home/Home'));

const AdminLayout = () => {
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
              <Route path="/dashboard/customer">
                <LazyWrapper> <Customers /> </LazyWrapper>
              </Route>
              <Route exact path="/dashboard/category">
                <LazyWrapper> <Categories /> </LazyWrapper>
              </Route>
              <Route exact path="/dashboard/category/new">
                <LazyWrapper> <NewCategory /> </LazyWrapper>
              </Route>
              <Route exact path="/dashboard/category/edit/:cId">
                <LazyWrapper> <EditCategory /> </LazyWrapper>
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
  );
}

export default AdminLayout;
