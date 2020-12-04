import React, { useEffect, Fragment } from "react";
import classes from "./SuitableCategories.module.css";
import CategoryCard from "./CategoryCard/CategoryCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import ImgLoader from "../../../components/UI/ImgLoader/ImgLoader";
import { useHistory } from "react-router-dom";
import { getListCategory } from "../../../store/actions/public/category";
import { scrollBehavior } from "../../../utils/scrollToTop";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
};

const SuitableCategories = () => {
  const history = useHistory();
  const { loading, error, categoryList } = useSelector(
    (state) => state.categoryList
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListCategory());
  }, [dispatch]);
  const categoriesMarkup = categoryList.map((c) => (
    <CategoryCard
      key={c.id}
      image={c.image}
      title={c.name}
      clicked={() => {
        history.push(`/categories/${c.id}`);
        scrollBehavior();
      }}
    />
  ));
  return (
    <div className={classes.SuitableCategories}>
      <h3>NGÀNH HÀNG QUAN TÂM</h3>
      {loading && <ImgLoader />}
      {!loading && !error && (
        <Fragment>
          <Slider {...settings}>{categoriesMarkup}</Slider>
        </Fragment>
      )}
    </div>
  );
};

export default SuitableCategories;
