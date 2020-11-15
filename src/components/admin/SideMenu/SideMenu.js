import React from 'react';
import { Divider, List, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

const SideMenu = () => {
  return (
    <React.Fragment>
      <List component="nav">
        <ListItem button>
          <Link to="/dashboard/product" className="dashboard-link">
            Sản phẩm
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="/dashboard/customer" className="dashboard-link">
            Khách hàng
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="/dashboard/category" className="dashboard-link">
            Loại sản phẩm
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="/dashboard/order" className="dashboard-link">
            Đơn hàng
          </Link>
        </ListItem>
      </List>
      <Divider />
      <ListItem button>
        <Link to="/" className="dashboard-link">
          Về trang chủ
        </Link>
      </ListItem>
    </React.Fragment>
  );
}

export default SideMenu;
