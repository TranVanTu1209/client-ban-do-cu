import React from "react";
import classes from "./CategoryCard.module.css";

const CategoryCard = ({ title, image, clicked }) => {
  return (
    <div className={classes.CategoryCard}>
      <img src={image} alt={title} onClick={clicked} />
      <p className='text-center'> {title} </p>
    </div>
  );
};

export default CategoryCard;
