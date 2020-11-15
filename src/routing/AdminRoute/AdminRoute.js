import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, useHistory } from 'react-router-dom';

const AdminRoute = ({ component: Component, ...rest }) => {
  const { uid, email } = useSelector(state => state.auth);
  const history = useHistory();

  useEffect(() => {
    if (!uid || email !== 'admin@gmail.com') history.push('/');
  }, [uid, email, history]);

  return <Route {...rest} component={Component} />
}

export default AdminRoute;
