import React, { useState } from 'react';
import classes from './SuitableCategories.module.css';
import CategoryCard from './CategoryCard/CategoryCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1
}

const SuitableCategories = () => {
  const [categories] = useState([
    {
      id: '1',
      image: 'https://salt.tikicdn.com/cache/280x280/ts/product/30/00/fa/5eeb249f3b748c540479a5e61cb01810.jpg',
      title: 'Ổ Cứng SSD'
    },
    {
      id: '2',
      image: 'https://salt.tikicdn.com/cache/280x280/ts/product/32/3d/a5/69a6c74574f882fec47557ddb90a2e65.jpg',
      title: 'Sách làm cha mẹ'
    },
    {
      id: '3',
      image: 'https://salt.tikicdn.com/cache/280x280/ts/product/e3/c4/7f/3d25745dba8d7868367f0ad08bb6b154.jpg',
      title: 'Sữa cho bé dưới 24 tháng'
    },
    {
      id: '4',
      image: 'https://salt.tikicdn.com/cache/280x280/ts/product/f1/2f/5d/41de0a39018d7c1cb42ddd53fdeddb9f.jpg',
      title: 'Pin tiểu, Pin sạc'
    },
    {
      id: '5',
      image: 'https://salt.tikicdn.com/cache/280x280/ts/product/9b/27/68/ddf6d673ad1c38d0f2726da6d6b4c78a.jpg',
      title: 'Tã giấy'
    },
    {
      id: '6',
      image: 'https://salt.tikicdn.com/cache/280x280/ts/product/5f/22/06/867ae1f78f38333d7c9ca55783b9f100.png',
      title: 'Balo Laptop'
    },
    {
      id: '7',
      image: 'https://salt.tikicdn.com/cache/280x280/ts/product/30/9f/de/aa2cef8d54fc0742e0a5fc07a8bc3091.jpg',
      title: 'Bộ chăn, ga, drap'
    }
  ]);
  const categoriesMarkup = categories.map(c => <CategoryCard key={c.id} image={c.image} title={c.title} />);
  return (
    <div className={classes.SuitableCategories}>
      <h3>
        NGÀNH HÀNG QUAN TÂM
      </h3>
      <Slider {...settings}>
        {categoriesMarkup}
      </Slider>
    </div>
  )
}

export default SuitableCategories;
