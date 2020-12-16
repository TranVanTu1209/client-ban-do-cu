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
  Button,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {
  getListVendors,
  deleteVendor,
} from "../../../store/actions/admin/vendor";
import ImgLoader from "../../../components/UI/ImgLoader/ImgLoader";
import Alert from "@material-ui/lab/Alert";
import DeleteIcon from "@material-ui/icons/Delete";
import ConfirmDelete from "../../../components/shared/ConfirmDelete/ConfirmDelete";
import { useHistory } from "react-router-dom";

const VendorList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showConfirm, setShowConfirm] = useState(false);
  const { loading, error, vendors } = useSelector((state) => state.listVendor);
  const [selectedVendor, setSelectedVendor] = useState(null);

  useEffect(() => {
    dispatch(getListVendors());
  }, [dispatch]);

  const closeConfirm = () => setShowConfirm(false);
  const openConfirm = () => setShowConfirm(true);

  const deleteVendorHandler = () => {
    if (selectedVendor) {
      dispatch(deleteVendor(selectedVendor));
      closeConfirm();
    }
  };

  return (
    <div>
      <div className='d-flex align-items-center justify-content-between py-2'>
        <h3>Danh sách nhà cung cấp</h3>
        <Button
          variant='contained'
          color='primary'
          onClick={() => history.push("/dashboard/vendor/new")}
        >
          Tạo mới nhà cung cấp
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
                {vendors.map((v) => (
                  <TableRow key={v.id}>
                    <TableCell>
                      <Checkbox
                        color='primary'
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                    </TableCell>
                    <TableCell>{v.name || ""}</TableCell>
                    <TableCell> {v.email || ""} </TableCell>
                    <TableCell>{v.phone_number || ""}</TableCell>
                    <TableCell> {v.address || ""} </TableCell>
                    <TableCell> {v.age || ""} </TableCell>
                    <TableCell>
                      {v.gender === "male" || v.gender === "1" ? "Nam" : "Nữ"}
                    </TableCell>
                    <TableCell>
                      <IconButton
                        onClick={() => {
                          openConfirm();
                          setSelectedVendor(v.id);
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
              clicked={deleteVendorHandler}
            />
          )}
        </>
      )}
    </div>
  );
};

export default VendorList;
