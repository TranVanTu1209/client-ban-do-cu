import React, { useEffect } from 'react';
import classes from './CreateProduct.module.css';
import { Grid } from '@material-ui/core';
import ImgLoader from '../../components/UI/ImgLoader/ImgLoader';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Route, Switch, Link } from 'react-router-dom';
import SearchResultItem from '../../components/FormElement/SearchProduct/SearchResultItem/SearchResultItem';
import CreateForm from './CreateForm/CreateForm';
import EditForm from './EditForm/EditForm';
import { fetchProducts } from '../../store/actions/product/productAction';

const CreateProduct = () => {
  const dispatch = useDispatch();
  const { product: { products, loading }, auth: { email } } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <React.Fragment>
      {
        email !== 'admin@gmail.com' && <Redirect to="/" />
      }
      <Grid container spacing={3}>
        <Grid item md={7} sm={12}>
          <div className={classes.AllProduct}>
            {
              loading && <ImgLoader />
            }
            {
              products.length > 0 && products.map(product => (
                <Link key={product.id} to={`/new/product/edit/${product.id}`}>
                  <SearchResultItem product={product} />
                </Link>
              ))
            }
          </div>
        </Grid>
        <Grid item md={5} sm={12}>
          <Switch>
            <Route path={`/new/product/edit/:pId`} >
              <EditForm />
            </Route>
            <Route path="/">
              <CreateForm />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default CreateProduct;
