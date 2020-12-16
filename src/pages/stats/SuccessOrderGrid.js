import React from "react";

const SuccessOrderGrid = ({ data }) => {
  return (
    <div className='stat-grid'>
      <p className='lead'>Tổng số đơn hàng : {data?.order?.length}</p>
      <p>Tổng tiền thu được : {data?.total} đ</p>
    </div>
  );
};

export default SuccessOrderGrid;
