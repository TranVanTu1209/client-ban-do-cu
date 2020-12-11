import { all } from "redux-saga/effects";
import watcherAuth from "./user/auth";
import watcherProfile from "./user/profile";
import watcherCategory from "./public/category";
import watcherAdminCategory from "./admin/category";
import watcherAdminProduct from "./admin/product";
import watcherProduct from "./public/product";
import watcherAdminCustomer from "./admin/customer";
import watcherAddress from "./public/address";
import watcherAdminVendor from "./admin/vendor";

function* rootSaga() {
  yield all([
    watcherAuth(),
    watcherProfile(),
    watcherCategory(),
    watcherAdminCategory(),
    watcherProduct(),
    watcherAdminProduct(),
    watcherAdminCustomer(),
    watcherAddress(),
    watcherAdminVendor(),
  ]);
}

export default rootSaga;
