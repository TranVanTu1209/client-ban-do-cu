import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, useHistory } from 'react-router-dom';

const ProtectRoute = ({ component: Component, ...rest }) => {
  const { uid } = useSelector(state => state.auth);
  const history = useHistory();

  useEffect(() => {
    if (!uid) history.push('/');
  }, [uid, history]);

  return <Route {...rest} render={props => <Component {...props} />} />;
}

export default ProtectRoute;
