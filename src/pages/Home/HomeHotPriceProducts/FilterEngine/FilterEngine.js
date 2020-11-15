import React, { useState } from 'react';
import classes from './FilterEngine.module.css';

const FilterEngine = ({ onChangePriceRange, priceRange, order, category, onChangeOrder, onChangeCategory }) => {
  const [priceRanges] = useState([100, 200, 300, 400, 500, 600, 700, 800, 900]);
  const [categories] = useState(['cate1', 'cate2', 'cate3', 'cate4', 'cate5', 'cate6', 'cate7', 'cate8', 'cate9', 'cate10'])
  const priceRangesMarkup = priceRanges.map(price => (
    <li className="custom-select-menu-item" key={price}
      onClick={() => onChangePriceRange(price)}> {'<'} {price} đ </li>
  ));
  const catesMarkup = categories.map(cate => (<li key={cate} className="custom-select-menu-item"
    onClick={() => onChangeCategory(cate)}> {cate} </li>));
  return (
    <ul className={classes.FilterEngine}>
      <li className="custom-select">
        <span> {priceRange > 0 ? `Sp < ${priceRange} đ` : 'Chọn khoảng giá'} </span>
        <ul className="custom-select-menu">
          {priceRangesMarkup}
        </ul>
      </li>
      <li className="custom-select">
        <span>
          {
            !order ? 'Sắp xếp thứ tự' : order === 'asc' ? 'Giảm dần' : 'Tăng dần'
          }
        </span>
        <ul className="custom-select-menu">
          <li className="custom-select-menu-item" onClick={() => onChangeOrder('asc')}>
            Giảm dần
          </li>
          <li className="custom-select-menu-item" onClick={() => onChangeOrder('dec')}>
            Tăng dần
          </li>
          <li className="custom-select-menu-item" onClick={() => onChangeOrder(null)}>
            Ngẫu nhiên
          </li>
        </ul>
      </li>
      <li className="custom-select">
        <span> {category ? category : 'Danh mục sản phẩm'} </span>
        <ul className="custom-select-menu">
          {catesMarkup}
        </ul>
      </li>
    </ul>
  );
}

export default FilterEngine;
