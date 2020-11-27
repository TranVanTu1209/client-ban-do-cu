import React, { useEffect } from "react";
import classes from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem/SidebarItem";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { getListCategory } from "../../../store/actions/public/category";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { loading, error, categoryList } = useSelector(
    (state) => state.categoryList
  );
  useEffect(() => {
    dispatch(getListCategory());
  }, [dispatch]);

  let sidebarItemsMarkup;

  if (loading) {
    sidebarItemsMarkup = Array(10)
      .fill(1)
      .map((_, id) => (
        <Typography key={id} component='div' variant='h3'>
          <Skeleton />
        </Typography>
      ));
  }
  if(!loading && !error) {
    sidebarItemsMarkup = categoryList.map((item) => (
      <SidebarItem
        key={item.id}
        id={item.id}
        Icon={DoubleArrowIcon}
        title={item.name}
      />
    ));
  }
  
  return <div className={classes.Sidebar}>{sidebarItemsMarkup}</div>;
};

export default Sidebar;
