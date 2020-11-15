import React, { useEffect, useState } from 'react';
import classes from './HomeHotPriceProducts.module.css';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeProduct from '../HomeProduct/HomeProduct';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import FilterEngine from './FilterEngine/FilterEngine';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import Spinner from '../../../components/UI/Spinner/Spinner';
import { fetchProducts } from '../../../store/actions/product/productAction';
const PRODUCTS_PER_PAGE = 10;

const HomeHotPriceProducts = () => {
  const { products, loading } = useSelector(state => state.product);
  const [currentPage, setCurrentPage] = useState(0);
  const [homeProducts, setHomeProducts] = useState([]);
  const [priceRange, setPriceRange] = useState(0);
  const [order, setOrder] = useState(null);
  const [category, setCategory] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setHomeProducts(products.slice(PRODUCTS_PER_PAGE * currentPage,
      (currentPage + 1) * PRODUCTS_PER_PAGE));
  }, [currentPage, products]);

  useEffect(() => {
    if (priceRange > 0)
    {
      setHomeProducts(products.filter(p => p.price < priceRange));
    }
  }, [priceRange, products]);

  useEffect(() => {
    if (order)
    {
      switch (order)
      {
        case 'dec':
          setHomeProducts(prevProducts => {
            const p = [...prevProducts];
            p.sort((a, b) => a.price - b.price);
            return p;
          }); break;
        case 'asc':
          setHomeProducts(prevProducts => {
            const p = [...prevProducts];
            p.sort((a, b) => b.price - a.price);
            return p;
          }); break;
        default: setHomeProducts(prevProducts => prevProducts); break;
      }
    }
  }, [order]);

  useEffect(() => {
    if (category)
    {
      setHomeProducts(products.filter(p => p.category === category));
    }
  }, [category, products]);

  const handlePaginationChange = (event, value) => {
    setCurrentPage(value - 1);
  };

  return (
    <div className={classes.HomeHotPriceProducts}>
      {
        loading && <Spinner />
      }
      <header>
        <h3>
          Giá sốc hôm nay <FlashOnIcon />
        </h3>
        <div className={classes.Center}>
          <FilterEngine onChangePriceRange={setPriceRange} priceRange={priceRange}
            order={order} onChangeOrder={setOrder}
            category={category} onChangeCategory={setCategory}
          />
        </div>
        <Button onClick={() => setHomeProducts(products)}>Xem tất cả <ChevronRightIcon /> </Button>
      </header>
      <div className={classes.ListProduct}>
        {
          homeProducts.map(p => (<HomeProduct key={p.id} product={p} />))
        }
      </div>
      <div className={classes.Pagination}>
        <Pagination count={Math.ceil(products.length / PRODUCTS_PER_PAGE)} color="primary"
          onChange={handlePaginationChange} />
      </div>
    </div>
  );
}

export default HomeHotPriceProducts;
