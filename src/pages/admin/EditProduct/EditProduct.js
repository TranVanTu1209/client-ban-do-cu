import React, { useState, useEffect, Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import { Link, useParams } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useSelector, useDispatch } from "react-redux";
import { updateProduct } from "../../../store/actions/admin/product";
import { getProductDetail } from "../../../store/actions/public/product";
import ImgLoader from "../../../components/UI/ImgLoader/ImgLoader";
import Alert from "@material-ui/lab/Alert";
import { getListCategory } from "../../../store/actions/public/category";

const EditProduct = () => {
  const dispatch = useDispatch();
  const { pId } = useParams();
  const { loading, error, product } = useSelector(
    (state) => state.productDetail
  );
  const { categoryList } = useSelector((state) => state.categoryList);
  const [editProduct, setEditProduct] = useState({
    name: "",
    image: "",
    description: "",
    category_id: "",
    material: "",
    price: 0,
    originPrice: 0,
    number: "",
    status: "2",
    color: "",
    size: "",
  });
  useEffect(() => {
    dispatch(getProductDetail(pId));
  }, [dispatch, pId]);
  useEffect(() => {
    if (product)
      setEditProduct({
        name: product.name,
        image: product.image,
        description: product.description,
        category_id: product.category_id,
        material: product.material,
        price: product.price,
        originPrice: product.originPrice,
        number: product.number,
        status: product.status,
        color: product.color,
        size: product.size,
      });
  }, [product]);
  useEffect(() => {
    if (categoryList.length === 0) dispatch(getListCategory());
  }, [dispatch, categoryList.length]);

  const changeHandler = (event) => {
    event.persist();
    setEditProduct((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(
      updateProduct(pId, {
        ...editProduct,
        category_id: +editProduct.category_id,
      })
    );
  };
  return (
    <Fragment>
      {loading && <ImgLoader />}
      {error && (
        <Alert severity='error' className='mb-3'>
          {error?.response?.data?.message || "Lỗi xảy ra. Vui lòng thử lại"}
        </Alert>
      )}
      {!error && !loading && (
        <Fragment>
          <Paper className='p-4 bg-white rounded mt-3'>
            <h3 className='display-4 mb-3'>Cập nhật/Chỉnh sửa sản phẩm</h3>
            <form onSubmit={submitHandler}>
              <div className='form-group'>
                <label htmlFor='name'>Tên sản phẩm</label>
                <TextField
                  name='name'
                  value={editProduct.name || ""}
                  onChange={changeHandler}
                  fullWidth
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='image'>Hình ảnh đại diện</label>
                <TextField
                  name='image'
                  value={editProduct.image || ""}
                  onChange={changeHandler}
                  fullWidth
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='category_id'>Loại sản phẩm</label>
                <Select
                  id='category_id'
                  name='category_id'
                  value={editProduct.category_id || ""}
                  onChange={changeHandler}
                  fullWidth
                >
                  {categoryList.map((c) => (
                    <MenuItem key={c.id} value={c.name}>
                      {c.name}
                    </MenuItem>
                  ))}
                </Select>
              </div>
              <Grid container spacing={3}>
                <Grid item md={6}>
                  <div className='form-group'>
                    <label htmlFor='material'>
                      Số lượng sản phẩm trong kho
                    </label>
                    <TextField
                      name='number'
                      value={editProduct.number || ""}
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
                      value={editProduct.material || ""}
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
                      value={editProduct.price || ""}
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
                      value={editProduct.originPrice || ""}
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
                      value={editProduct.color || ""}
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
                      value={editProduct.size || ""}
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
                  data={editProduct.description || ""}
                  onReady={() => {
                    console.log("Editor is ready to use!");
                  }}
                  onChange={(_, editor) => {
                    setEditProduct((prevState) => ({
                      ...prevState,
                      description: editor.getData(),
                    }));
                  }}
                />
              </div>
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
      )}
    </Fragment>
  );
};

export default EditProduct;
