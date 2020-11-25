import { combineReducers } from 'redux';
import authReducer from './user/authReducer';
import profileReducer from './user/profileReducer';
import productReducer from './product/productReducer';
import cartReducer from './cart/cartReducer';
import orderReducer from './order/orderReducer';
import alertReducer from './alert/alertReducer';
import userReducer from './user/userReducer';
import productByCategoryReducer from './product/productByCategoryReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  product: productReducer,
  cart: cartReducer,
  order: orderReducer,
  alert: alertReducer,
  user: userReducer,
  productByCategory: productByCategoryReducer
});

export default rootReducer;