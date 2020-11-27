import React from 'react';
import classes from './SidebarItem.module.css';
import { useHistory, useParams } from 'react-router-dom';

const SidebarItem = ({ id, Icon, title }) => {
  const history = useHistory();
  const params = useParams();
  const onRedirectToCatetory = () => {
    history.push(`/categories/${id}`);
  }
  return (
    <li className={[classes.SidebarItem, params.cateId === id ? classes.Active : ''].join(' ')} 
      onClick={onRedirectToCatetory}>
      <Icon fontSize="small" /> {title}
    </li>
  );
}

export default SidebarItem;
