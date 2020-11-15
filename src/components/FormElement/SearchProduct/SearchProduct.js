import React, { useState, useCallback, useRef } from 'react';
import classes from './SearchProduct.module.css';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import SearchResultItem from './SearchResultItem/SearchResultItem';
import { filterProduct } from '../../../utils/products/search';
import { useSelector } from 'react-redux';

const SearchProduct = () => {
  const { products } = useSelector(state => state.product);
  const [showResult, setShowResult] = useState(false);
  const [term, setTerm] = useState('');
  const [productsResult, setProductsResult] = useState([]);
  const ref = useRef();

  const onTermChangeHandler = useCallback(e => {
    setTerm(e.target.value);
    if (e.target.value)
    {
      openResultList();
      setProductsResult(products.filter(p => filterProduct(p.title, term)));
    } else
    {
      clearResultList();
    }
  }, [term, products]);

  const clearResultList = () => {
    setShowResult(false);
    setTerm('');
    setProductsResult([]);
  };
  const openResultList = () => setShowResult(true);
  const searchResultItems = productsResult.map(p => <SearchResultItem key={p.id} product={p} showButton />);

  return (
    <div className={classes.SearchProduct}>
      <input type="text" placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn..." value={term} onChange={onTermChangeHandler} ref={ref} />
      {
        showResult ? <button onClick={clearResultList} > <CloseIcon /> </button>
          : <button onClick={() => ref.current.focus()}> <SearchIcon /> Tìm kiếm</button>
      }
      <div className={[classes.Result, showResult ? classes.Show : null].join(' ')}>
        {productsResult.length > 0 ? searchResultItems : <p className="text-center" >Không tìm thấy sản phẩm</p>}
      </div>
    </div>
  );
}

export default SearchProduct;
