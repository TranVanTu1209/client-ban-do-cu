import * as actionTypes from '../../actionTypes';
import { db } from '../../../firebase/firebase';
import { setAlert } from '../alert/alertAction';

export const createProduct = (title, image, price, originPrice, description, category, soldOut = false) => dispatch => {
  dispatch({
    type: actionTypes.FETCH_PRODUCTS
  });
  db.collection('products').add({
    category: category,
    image: image,
    originPrice: originPrice,
    price: price,
    soldOut: soldOut,
    title: title,
    description: description
  }).then(newProduct => {
    dispatch({
      type: actionTypes.CREATE_PRODUCT,
      payload: {
        id: newProduct.id,
        title, image, price, originPrice, category, soldOut, description
      }
    });
    dispatch(setAlert('Thêm sản phẩm thành công', 'Success'));
  }).catch(err => {
    dispatch(setAlert(err.message, 'Danger'));
    dispatch({
      type: actionTypes.PRODUCT_ERROR,
      payload: err.message
    });
  })
}

export const fetchProducts = () => dispatch => {
  dispatch({
    type: actionTypes.FETCH_PRODUCTS
  });
  db.collection('products').get()
    .then(snapshot => {
      const products = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      dispatch({
        type: actionTypes.SET_PRODUCTS,
        payload: products
      });
    }).catch(err => {
      dispatch(setAlert(err.message, 'Danger'));
      dispatch({
        type: actionTypes.PRODUCT_ERROR,
        payload: err.message
      });
    });
}

export const deleteProduct = (id) => dispatch => {
  dispatch({
    type: actionTypes.FETCH_PRODUCTS
  });
  db.collection('products').doc(id).delete()
    .then(() => {
      dispatch({
        type: actionTypes.REMOVE_PRODUCT,
        payload: id
      });
      dispatch(setAlert('Xóa sản phẩm thành công', 'Success'));
    }).catch(err => {
      dispatch(setAlert(err.message, 'Danger'));
      dispatch({
        type: actionTypes.PRODUCT_ERROR,
        payload: err.message
      });
    });
}

export const updateProduct = (id, newProduct) => dispatch => {
  dispatch({
    type: actionTypes.FETCH_PRODUCTS
  });
  db.collection("products").doc(id).update({
    ...newProduct
  }).then(() => {
    dispatch({
      type: actionTypes.UPDATE_PRODUCT,
      payload: { id, ...newProduct }
    });
    dispatch(setAlert('Cập nhật sản phẩm thành công', 'Success'));
  }).catch(err => {
    dispatch(setAlert(err.message, 'Danger'));
    dispatch({
      type: actionTypes.PRODUCT_ERROR,
      payload: err.message
    });
  });
}

export const getProductsByCategory = (cateId) => dispatch => {
  dispatch({
    type: actionTypes.FETCH_PRODUCT_BY_CATEGORY_START
  });
  db.collection('products').where('category', '==', cateId).get()
    .then(snapshot => {
      const products = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      dispatch({
        type: actionTypes.FETCH_PRODUCT_BY_CATEGORY_SUCCESS,
        payload: products
      });
    }).catch(err => {
      dispatch(setAlert(err.message, 'Danger'));
      dispatch({
        type: actionTypes.FETCH_PRODUCT_BY_CATEGORY_FAILED,
        payload: err.message
      });
    });
}