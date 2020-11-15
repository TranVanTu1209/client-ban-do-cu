import React from 'react';
import classes from './AlertList.module.css';
import { useSelector } from 'react-redux';
import Alert from '../../UI/Alert/Alert';

const AlertList = () => {
  const { alertItems } = useSelector(state => state.alert);
  const alertListItem = alertItems.map(alert => <Alert key={alert.id} alert={alert} />);
  return (
    <div className={[classes.AlertList, alertItems.length > 0 ? classes.Show : ''].join(' ')}>
      {alertListItem}
    </div>
  );
}

export default AlertList;
