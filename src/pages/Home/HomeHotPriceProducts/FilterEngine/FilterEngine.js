import React, { useState } from "react";
import classes from "./FilterEngine.module.css";
import { formatMoney } from "../../../../utils/formatMoney";
import { useSelector } from "react-redux";

const FilterEngine = ({
  onChangePriceRange,
  priceRange,
  order,
  category,
  onChangeOrder,
  onChangeCategory,
}) => {
  const [priceRanges] = useState([
    100000,
    200000,
    300000,
    400000,
    500000,
    600000,
    700000,
    800000,
    900000,
    10000000,
  ]);
  const { categoryList } = useSelector((state) => state.categoryList);
  const priceRangesMarkup = priceRanges.map((price) => (
    <li
      className='custom-select-menu-item'
      key={price}
      onClick={() => onChangePriceRange(price)}
    >
      {"<"} {formatMoney(price)} đ
    </li>
  ));
  const catesMarkup = categoryList?.map((cate) => (
    <li
      key={cate.id}
      className='custom-select-menu-item'
      onClick={() => onChangeCategory(cate.id)}
    >
      {cate.name}
    </li>
  ));
  return (
    <ul className={classes.FilterEngine}>
      <li className='custom-select'>
        <span>
          {priceRange > 0
            ? `Sp < ${formatMoney(priceRange)} đ`
            : "Chọn khoảng giá"}
        </span>
        <ul className='custom-select-menu'>{priceRangesMarkup}</ul>
      </li>
      <li className='custom-select'>
        <span>
          {!order
            ? "Sắp xếp thứ tự"
            : order === "asc"
            ? "Giảm dần"
            : "Tăng dần"}
        </span>
        <ul className='custom-select-menu'>
          <li
            className='custom-select-menu-item'
            onClick={() => onChangeOrder("asc")}
          >
            Giảm dần
          </li>
          <li
            className='custom-select-menu-item'
            onClick={() => onChangeOrder("dec")}
          >
            Tăng dần
          </li>
          <li
            className='custom-select-menu-item'
            onClick={() => onChangeOrder(null)}
          >
            Ngẫu nhiên
          </li>
        </ul>
      </li>
      <li className='custom-select'>
        <span> {category ? category : "Danh mục sản phẩm"} </span>
        <ul className='custom-select-menu'>{catesMarkup}</ul>
      </li>
    </ul>
  );
};

export default FilterEngine;
