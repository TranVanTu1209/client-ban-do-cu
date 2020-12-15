import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import "react-datepicker/dist/react-datepicker.css";
import SuccessOrderGrid from "./SuccessOrderGrid";
import CancelOrderGrid from "./CancelOrderGrid";
import axios from "../../store/api/axios";

const Profit = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { userInfo } = useSelector((state) => state.profile);
  useEffect(() => {
    const onFetchProfit = async () => {
      try {
        const res = await axios.get("/statistics/order/vendor");
        console.log(res.data);
      } catch (error) {}
    };
    onFetchProfit();
  }, [startDate]);
  return (
    <div>
      <div className='my-3'>
        <h3 className='mb-2'>Thống kê doanh thu theo ngày</h3>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
      <Grid container spacing={3}>
        <Grid item lg={6}>
          <SuccessOrderGrid time={startDate} />
        </Grid>
        <Grid item lg={6}>
          <CancelOrderGrid />
        </Grid>
      </Grid>
    </div>
  );
};

export default Profit;
