import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Footer from '../../components/shared/Footer/Footer';
import Header from '../../components/shared/Header/Header';
import Login from '../../pages/Login/Login';

const PublicLayout = () => {
  return <Fragment>
    <Header />
    <Route component={Login} />
    <Footer />
  </Fragment>;
}

export default PublicLayout;
