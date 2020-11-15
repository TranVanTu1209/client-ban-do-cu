import React from 'react';
import { List, ListItem, Divider, ListItemIcon, ListItemText } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListAltIcon from '@material-ui/icons/ListAlt';
import RoomIcon from '@material-ui/icons/Room';

const ProfileSidebar = () => {
  return (
    <List component="nav">
      <ListItem button>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Thông tin tài khoản" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <NotificationsIcon />
        </ListItemIcon>
        <ListItemText primary="Thông báo của tôi" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ListAltIcon />
        </ListItemIcon>
        <ListItemText primary="Quảng ký đơn hàng" />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <RoomIcon />
        </ListItemIcon>
        <ListItemText primary="Địa chỉ" />
      </ListItem>
    </List>
  );
}
export default ProfileSidebar;
