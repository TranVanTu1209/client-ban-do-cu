import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import PublicLayout from './layout/PublicLayout/PublicLayout';
import AdminLayout from './layout/AdminLayout/AdminLayout';
import AuthLayout from './layout/AuthLayout/AuthLayout';
import AlertList from './components/shared/AlertList/AlertList';

const App = () => {
  const { isAuthenticated } = useSelector(state => state.auth);
  return (
    <Fragment>
      {!isAuthenticated && <PublicLayout />}
      {/* {uid && email === 'admin@gmail.com' && <AdminLayout />}
      {uid && email !== 'admin@gmail.com' && <AuthLayout />} */}
      <AlertList />
    </Fragment>
  );
}

export default App;
