import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { logout } from '../../../store/actions/user/authAction';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="admin header menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          Trang quản trị
        </Typography>
        <div className="ml-auto">
          <Button variant="contained" color="secondary" onClick={() => dispatch(logout())} >Đăng xuất </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
