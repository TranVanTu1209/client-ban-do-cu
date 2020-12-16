import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
// import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import "react-datepicker/dist/react-datepicker.css";
import SuccessOrderGrid from "./SuccessOrderGrid";
import CancelOrderGrid from "./CancelOrderGrid";
import axios from "../../store/api/axios";
import ImgLoader from "../../components/UI/ImgLoader/ImgLoader";

const Profit = () => {
  const [startDate, setStartDate] = useState(new Date());
  // const { userInfo } = useSelector((state) => state.profile);
  const [profitData, setProfitData] = useState({
    loading: false,
    error: null,
    data: {},
  });
  useEffect(() => {
    const onFetchProfit = async () => {
      setProfitData((prevState) => ({
        ...prevState,
        loading: true,
      }));
      try {
        const splitDate = startDate.toLocaleDateString().split("/");
        const res = await axios.post("/statistics/order/vendor", {
          date: `${splitDate[2]}-${splitDate[0]}-${splitDate[1]}`,
        });
        setProfitData(() => ({
          error: null,
          data: res.data.data,
          loading: false,
        }));
      } catch (error) {
        setProfitData(() => ({
          error: error,
          data: {},
          loading: false,
        }));
      }
    };
    onFetchProfit();
  }, [startDate]);
  console.log(profitData.data);
  return (
    <div>
      <div className='my-3'>
        <h3 className='mb-2'>Thống kê doanh thu theo ngày</h3>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
      {profitData.loading && <ImgLoader />}
      <Grid container spacing={3}>
        <Grid item lg={6}>
          <SuccessOrderGrid time={startDate} data={profitData.data} />
        </Grid>
        <Grid item lg={6}>
          <CancelOrderGrid />
        </Grid>
      </Grid>
    </div>
  );
};

export default Profit;
