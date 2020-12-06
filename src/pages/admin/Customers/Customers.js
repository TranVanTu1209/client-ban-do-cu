import React, { useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  IconButton,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {
  getListCustomers,
  deleteCustomer,
} from "../../../store/actions/admin/customer";
import ImgLoader from "../../../components/UI/ImgLoader/ImgLoader";
import Alert from "@material-ui/lab/Alert";
import DeleteIcon from "@material-ui/icons/Delete";
import ConfirmDelete from "../../../components/shared/ConfirmDelete/ConfirmDelete";

const Products = () => {
  const dispatch = useDispatch();
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const { loading, error, customers } = useSelector(
    (state) => state.listCustomer
  );

  useEffect(() => {
    dispatch(getListCustomers());
  }, [dispatch]);

  const closeConfirm = () => setShowConfirm(false);
  const openConfirm = () => setShowConfirm(true);

  const deleteProductHandler = () => {
    if (selectedCustomer) {
      dispatch(deleteCustomer(selectedCustomer));
      closeConfirm();
    }
  };
  return (
    <div>
      <div className='d-flex align-items-center justify-content-between py-2'>
        <h3>Danh sách khách hàng</h3>
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
                  <TableCell> Tên </TableCell>
                  <TableCell> Email </TableCell>
                  <TableCell> Số điện thoại </TableCell>
                  <TableCell> Địa chỉ </TableCell>
                  <TableCell> Tuổi </TableCell>
                  <TableCell> Giới tính </TableCell>
                  <TableCell> Hành động </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {customers.map((c) => (
                  <TableRow key={c.id}>
                    <TableCell>
                      <Checkbox
                        color='primary'
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                    </TableCell>
                    <TableCell>{c.name || ""}</TableCell>
                    <TableCell> {c.email || ""} </TableCell>
                    <TableCell>{c.phone_number || ""}</TableCell>
                    <TableCell> {c.address || ""} </TableCell>
                    <TableCell> {c.age || ""} </TableCell>
                    <TableCell>{c.gender === "male" ? "Nữ" : "Nam"}</TableCell>
                    <TableCell>
                      <IconButton
                        onClick={() => {
                          setSelectedCustomer(c.id);
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
