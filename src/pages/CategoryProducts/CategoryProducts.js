import React, { useEffect } from 'react';
import classes from './CategoryProducts.module.css';
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/shared/Sidebar/Sidebar';
import HomeProduct from '../Home/HomeProduct/HomeProduct';
import Spinner from '../../components/UI/Spinner/Spinner';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsByCategory } from '../../store/actions/product/productAction';
import SuitableCategories from '../Home/SuitableCategories/SuitableCategories';

const CategoryProducts = () => {
  const { loading, error, productList } = useSelector(state => state.productByCategory);
  const categoryId = useParams().cateId;
  const dispatch = useDispatch();

  useEffect(() => {
    if (categoryId)
    {
      dispatch(getProductsByCategory(categoryId));
    }
  }, [categoryId, dispatch]);

  const categoryProductMarkup = productList?.slice(0, 4).map(p => <HomeProduct key={p.id} product={p} />);
  return (
    <React.Fragment>
      {
        loading && <Spinner />
      }
      {
        error && <p> {error} </p>
      }
      <div className={classes.CategoryProducts}>
        <Sidebar />
        <div className={classes.cateList}>
          {productList?.length > 0 ? categoryProductMarkup : <p className="text-center"> Không tìm thấy sản phẩm </p>}
        </div>
      </div>
      <SuitableCategories />
    </React.Fragment>
  );
}

export default CategoryProducts;
