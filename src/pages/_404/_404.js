import React from 'react';
import { Link } from 'react-router-dom';
import classes from './_404.module.css';

const _404 = () => {
  return (
    <React.Fragment>
      <div className={classes._404}>
        <h1>Xin lỗi không tìm thấy trang này</h1>
        <h3>Lỗi 404</h3>
        <Link to="/" className="btn btn-yellow">
          Quay về trang chủ
        </Link>
      </div>
    </React.Fragment>
  );
}

export default _404;
