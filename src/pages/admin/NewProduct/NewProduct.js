import React, { useState, useEffect, Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useSelector, useDispatch } from "react-redux";
import { createProduct } from "../../../store/actions/admin/product";
import ImgLoader from "../../../components/UI/ImgLoader/ImgLoader";
import Alert from "@material-ui/lab/Alert";
import { getListCategory } from "../../../store/actions/public/category";

const NewProduct = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.productList);
  const { categoryList } = useSelector((state) => state.categoryList);
  const [newProduct, setNewProduct] = useState({
    name: "",
    image: "",
    description: "",
    category_id: categoryList.length > 0 ? 1 : 0,
    material: "",
    price: 0,
    originPrice: 0,
    number: "",
    status: "",
    color: "",
    size: "",
  });
  useEffect(() => {
    if (categoryList.length === 0) dispatch(getListCategory());
  }, [dispatch, categoryList.length]);
  const changeHandler = (event) => {
    event.persist();
    setNewProduct((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(
      createProduct({
        ...newProduct,
        category_id: +newProduct.category_id,
      })
    );
  };
  return (
    <Fragment>
      <Paper className='p-4 bg-white rounded mt-3'>
        <h3 className='display-4 mb-3'>Tạo mới sản phẩm</h3>
        <form onSubmit={submitHandler}>
          <div className='form-group'>
            <label htmlFor='name'>Tên sản phẩm</label>
            <TextField
              name='name'
              value={newProduct.name}
              onChange={changeHandler}
              fullWidth
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='image'>Hình ảnh đại diện</label>
            <TextField
              name='image'
              value={newProduct.image}
              onChange={changeHandler}
              fullWidth
              required
            />
          </div>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <div className='form-group'>
                <label htmlFor='category_id'>Loại sản phẩm</label>
                <Select
                  id='category_id'
                  name='category_id'
                  input={<Input />}
                  value={newProduct.category_id}
                  onChange={changeHandler}
                  fullWidth
                >
                  {categoryList.map((c) => (
                    <MenuItem key={c.id} value={c.id}>
                      {c.name}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </Grid>
            <Grid item md={6}>
              <div className='form-group'>
                <label htmlFor='status'> Trạng thái sản phẩm/ Độ mới (%) </label>
                <TextField
                  name='status'
                  value={newProduct.status}
                  onChange={changeHandler}
                  fullWidth
                />
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <div className='form-group'>
                <label htmlFor='number'>Số lượng sản phẩm trong kho</label>
                <TextField
                  name='number'
                  value={newProduct.number}
                  onChange={changeHandler}
                  fullWidth
                />
              </div>
            </Grid>
            <Grid item md={6}>
              <div className='form-group'>
                <label htmlFor='material'>Chất liệu sản phẩm</label>
                <TextField
                  name='material'
                  value={newProduct.material}
                  onChange={changeHandler}
                  fullWidth
                />
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <div className='form-group'>
                <label htmlFor='price'>Giá sản phẩm</label>
                <TextField
                  type='number'
                  name='price'
                  value={newProduct.price}
                  onChange={changeHandler}
                  required
                  fullWidth
                />
              </div>
            </Grid>
            <Grid item md={6}>
              <div className='form-group'>
                <label htmlFor='originPrice'>Giá gốc sản phẩm</label>
                <TextField
                  type='number'
                  name='originPrice'
                  value={newProduct.originPrice}
                  onChange={changeHandler}
                  required
                  fullWidth
                />
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <div className='form-group'>
                <label htmlFor='price'>Màu sắc</label>
                <TextField
                  name='color'
                  value={newProduct.color}
                  onChange={changeHandler}
                  required
                  fullWidth
                />
              </div>
            </Grid>
            <Grid item md={6}>
              <div className='form-group'>
                <label htmlFor='originPrice'>Kích cỡ</label>
                <TextField
                  name='size'
                  value={newProduct.size}
                  onChange={changeHandler}
                  required
                  fullWidth
                />
              </div>
            </Grid>
          </Grid>
          <div className='form-group'>
            <label>Mô tả sản phẩm</label>
            <CKEditor
              editor={ClassicEditor}
              data=''
              onReady={() => {
                console.log("Editor is ready to use!");
              }}
              onChange={(_, editor) => {
                setNewProduct((prevState) => ({
                  ...prevState,
                  description: editor.getData(),
                }));
              }}
            />
          </div>
          {loading && <ImgLoader />}
          {error && (
            <Alert severity='error' className='mb-3'>
              {error?.response?.data?.message || "Lỗi xảy ra. Vui lòng thử lại"}
            </Alert>
          )}
          <Button variant='contained' type='submit' color='primary'>
            Xác nhận
          </Button>
        </form>
      </Paper>
      <Button
        component={Link}
        to='/dashboard/product'
        color='inherit'
        className='mt-3'
        variant='contained'
      >
        &#8592; Quay lại
      </Button>
    </Fragment>
  );
};

export default NewProduct;
