import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import _404 from "../../pages/_404/_404";
import { Grid } from "@material-ui/core";
import Header from "../../components/admin/Header/Header";
import SideMenu from "../../components/admin/SideMenu/SideMenu";
import LazyWrapper from "../../utils/hoc/LazyWrapper";
import EditCategory from "../../pages/admin/EditCategory/EditCategory";
import EditProduct from "../../pages/admin/EditProduct/EditProduct";
import { useSelector } from "react-redux";
const Orders = React.lazy(() => import("../../pages/Orders/Orders"));
const Customers = React.lazy(() =>
  import("../../pages/admin/Customers/Customers")
);
const VendorList = React.lazy(() =>
  import("../../pages/admin/VendorList/VendorList")
);
const Categories = React.lazy(() =>
  import("../../pages/admin/Categories/Categories")
);
const NewCategory = React.lazy(() =>
  import("../../pages/admin/NewCategory/NewCategory")
);
const Products = React.lazy(() =>
  import("../../pages/admin/Products/Products")
);
const NewProduct = React.lazy(() =>
  import("../../pages/admin/NewProduct/NewProduct")
);
const NewVendor = React.lazy(() =>
  import("../../pages/admin/NewVendor/NewVendor")
);
const Home = React.lazy(() => import("../../pages/admin/Home/Home"));

const AdminLayout = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <React.Fragment>
      <Header />
      <div className='lg-container mt-2'>
        <Grid container>
          <Grid item md={2}>
            <SideMenu showCategoryLink showListVendorLink showCustomerLink />
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
              <Route exact path='/dashboard/product'>
                <LazyWrapper>
                  <Products />
                </LazyWrapper>
              </Route>
              <Route exact path='/dashboard/product/new'>
                <LazyWrapper>
                  <NewProduct />
                </LazyWrapper>
              </Route>
              <Route exact path='/dashboard/product/edit/:pId'>
                <LazyWrapper>
                  <EditProduct />
                </LazyWrapper>
              </Route>
              <Route path='/dashboard/customer'>
                <LazyWrapper>
                  <Customers />
                </LazyWrapper>
              </Route>
              <Route path='/dashboard/vendor/new'>
                <LazyWrapper>
                  <NewVendor />
                </LazyWrapper>
              </Route>
              <Route path='/dashboard/vendor'>
                <LazyWrapper>
                  <VendorList />
                </LazyWrapper>
              </Route>
              <Route exact path='/dashboard/category'>
                <LazyWrapper>
                  <Categories />
                </LazyWrapper>
              </Route>
              <Route exact path='/dashboard/category/new'>
                <LazyWrapper>
                  <NewCategory />
                </LazyWrapper>
              </Route>
              <Route exact path='/dashboard/category/edit/:cId'>
                <LazyWrapper>
                  <EditCategory />
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

export default AdminLayout;
