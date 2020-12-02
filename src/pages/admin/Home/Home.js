import React from "react";
import { useHistory } from "react-router-dom";
import { Paper, Button } from "@material-ui/core";

const Home = () => {
  const history = useHistory();
  return (
    <Paper className='p-5'>
      <h1>Admin Dashboard</h1>
      <p className='lead py-2'>What you gonna do today?</p>
      <Button
        variant='contained'
        color='primary'
        onClick={() => history.push("/dashboard/product")}
      >
        Xem sản phẩm
      </Button>
    </Paper>
  );
};

export default Home;
