import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PublicLayout from "./layout/PublicLayout/PublicLayout";
import AdminLayout from "./layout/AdminLayout/AdminLayout";
import AuthLayout from "./layout/AuthLayout/AuthLayout";
import AlertList from "./components/shared/AlertList/AlertList";
import { getProfile } from "./store/actions/user/profileAction";
import VendorLayout from "./layout/VendorLayout/VendorLayout";
import ImgLoader from "./components/UI/ImgLoader/ImgLoader";
import { getListProvince } from "./store/actions/public/address";

const App = () => {
  const { isAuthenticated, token } = useSelector((state) => state.auth);
  const { userInfo, loading } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userInfo && token) {
      dispatch(getProfile(token));
    }
  }, [dispatch, userInfo, token]);

  useEffect(() => {
    dispatch(getListProvince());
  }, [dispatch]);

  return (
    <Fragment>
      {!isAuthenticated && <PublicLayout />}
      {loading && <ImgLoader />}
      {isAuthenticated && userInfo?.role === 1 && <AdminLayout />}
      {isAuthenticated && userInfo?.role === 2 && <VendorLayout />}
      {isAuthenticated && userInfo?.role === 3 && <AuthLayout />}
      <AlertList />
    </Fragment>
  );
};

export default App;
