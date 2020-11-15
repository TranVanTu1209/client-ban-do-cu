import React, { useEffect, useState } from 'react';
import { Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, TablePagination, Button, Checkbox } from '@material-ui/core';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { formatProductTitle } from '../../../utils/products/products';

const Products = () => {
  const [page, setPage] = React.useState(0);
  const [products, setProducts] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(`https://fakestoreapi.com/products?limit=${rowsPerPage}`);
      console.log(res.data);
      setProducts(res.data);
    }
    fetchProducts();
  }, [rowsPerPage]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between py-2">
        <h3>Danh sách sản phẩm</h3>
        <Button variant="contained" color="primary">
          Thêm sản phẩm
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> Chọn </TableCell>
              <TableCell> Sản phẩm </TableCell>
              <TableCell> Trạng thái </TableCell>
              <TableCell> Tồn kho </TableCell>
              <TableCell> Loại SP </TableCell>
              <TableCell> Nhà cung cấp </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((p) => (
              <TableRow key={p.id}>
                <TableCell>
                  <Checkbox color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }}
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  <div className="d-flex align-items-center">
                    <img src={p.image} alt="product" className="img-sm mr-2" />
                    <Link to={`/dashboard/product/${p.id}`}>{formatProductTitle(p.title, 5)} </Link>
                  </div>
                </TableCell>
                <TableCell> <span className="badge badge-active">active</span> </TableCell>
                <TableCell> 5 </TableCell>
                <TableCell>{p.category}</TableCell>
                <TableCell> John Doe </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={products.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
}

export default Products;
