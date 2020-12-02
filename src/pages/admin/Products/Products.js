import React, { useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Button,
  Checkbox,
  IconButton,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { formatProductTitle } from "../../../utils/products/products";
import { useSelector, useDispatch } from "react-redux";
import { getProductList } from "../../../store/actions/public/product";
import { deleteProduct } from "../../../store/actions/admin/product";
import ImgLoader from "../../../components/UI/ImgLoader/ImgLoader";
import Alert from "@material-ui/lab/Alert";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ConfirmDelete from "../../../components/shared/ConfirmDelete/ConfirmDelete";

const Products = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { loading, error, products } = useSelector(
    (state) => state.productList
  );
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const closeConfirm = () => setShowConfirm(false);
  const openConfirm = () => setShowConfirm(true);

  const deleteProductHandler = () => {
    if (selectedProduct) {
      dispatch(deleteProduct(selectedProduct));
      closeConfirm();
    }
  };
  return (
    <div>
      <div className='d-flex align-items-center justify-content-between py-2'>
        <h3>Danh sách sản phẩm</h3>
        <Button
          variant='contained'
          color='primary'
          onClick={() => history.push("/dashboard/product/new")}
        >
          Thêm sản phẩm
        </Button>
      </div>
      {loading && <ImgLoader />}
      {error && (
        <Alert severity='error' className='mb-3'>
          {error?.response?.data?.message || "Lỗi xảy ra. Vui lòng thử lại"}
        </Alert>
      )}
      {!loading && !error && (
        <>
          <TableContainer component={Paper}>
            <Table aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell> Chọn </TableCell>
                  <TableCell> Sản phẩm </TableCell>
                  <TableCell> Tồn kho </TableCell>
                  <TableCell> Loại SP </TableCell>
                  <TableCell> Chất liệu </TableCell>
                  <TableCell> Giá </TableCell>
                  <TableCell> Giá gốc </TableCell>
                  <TableCell> Nhà cung cấp </TableCell>
                  <TableCell> Hành động </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((p) => (
                  <TableRow key={p.id}>
                    <TableCell>
                      <Checkbox
                        color='primary'
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                    </TableCell>
                    <TableCell component='th' scope='row'>
                      <div className='d-flex align-items-center'>
                        <img
                          src={p.image}
                          alt='product'
                          className='img-sm mr-2'
                        />
                        <Link to={`/dashboard/product/${p.id}`}>
                          {formatProductTitle(p.name, 5)}{" "}
                        </Link>
                      </div>
                    </TableCell>
                    <TableCell> {p.number} </TableCell>
                    <TableCell>{p.category_id}</TableCell>
                    <TableCell> {p.material} </TableCell>
                    <TableCell> {p.price} đ </TableCell>
                    <TableCell> {p.originPrice} đ </TableCell>
                    <TableCell> {p.user?.name} </TableCell>
                    <TableCell>
                    <IconButton
                        component={Link}
                        to={`/dashboard/product/edit/${p.id}`}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          setSelectedProduct(p.id);
                          openConfirm();
                        }}
                      >
                        <DeleteIcon color='secondary' />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component='div'
            count={products.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
          {showConfirm && (
            <ConfirmDelete
              show={showConfirm}
              close={closeConfirm}
              clicked={deleteProductHandler}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Products;
