import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getListCategory } from "../../../store/actions/public/category";
import { deleteCategory } from "../../../store/actions/admin/category";
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Checkbox,
  IconButton,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { formatProductTitle } from "../../../utils/products/products";
import ImgLoader from "../../../components/UI/ImgLoader/ImgLoader";
import Alert from "@material-ui/lab/Alert";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ConfirmDelete from "../../../components/shared/ConfirmDelete/ConfirmDelete";

const Categories = () => {
  const dispatch = useDispatch();
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { categoryList, loading, error } = useSelector(
    (state) => state.categoryList
  );
  useEffect(() => {
    dispatch(getListCategory());
  }, [dispatch]);

  const closeConfirm = () => setShowConfirm(false);
  const openConfirm = () => setShowConfirm(true);

  const deleteCategoryHandler = () => {
    if (selectedCategory) {
      dispatch(deleteCategory(selectedCategory));
      closeConfirm();
    }
  };

  return (
    <div>
      <div className='d-flex align-items-center justify-content-between py-2'>
        <h3>Danh sách các loại sản phẩm</h3>
        <Button
          variant='contained'
          color='primary'
          component={Link}
          to='/dashboard/category/new'
        >
          Thêm mới
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
                  <TableCell> # </TableCell>
                  <TableCell> Loại sản phẩm </TableCell>
                  <TableCell style={{ width: "200px" }}> Mô tả </TableCell>
                  <TableCell> Hành động </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {categoryList.map((c) => (
                  <TableRow key={c.id}>
                    <TableCell>
                      <Checkbox
                        color='primary'
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                    </TableCell>
                    <TableCell>{c.id}</TableCell>
                    <TableCell component='th' scope='row'>
                      <div className='d-flex align-items-center'>
                        <img
                          src={
                            c.image
                              ? c.image
                              : "https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                          }
                          alt='product'
                          className='img-sm mr-2'
                        />
                        <Link to={`/dashboard/category/${c.id}`}>
                          {formatProductTitle(c.name, 5)}
                        </Link>
                      </div>
                    </TableCell>
                    <TableCell style={{ width: "200px" }}>
                      {c.description.replace(/<[^>]+>/g, "")}
                    </TableCell>
                    <TableCell>
                      <IconButton
                        component={Link}
                        to={`/dashboard/category/edit/${c.id}`}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          setSelectedCategory(c.id);
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
              clicked={deleteCategoryHandler}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Categories;
