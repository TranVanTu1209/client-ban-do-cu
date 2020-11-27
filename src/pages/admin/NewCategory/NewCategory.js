import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useSelector, useDispatch } from "react-redux";
import { createCategory } from "../../../store/actions/admin/category";
import ImgLoader from "../../../components/UI/ImgLoader/ImgLoader";
import Alert from "@material-ui/lab/Alert";

const NewCategory = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.categoryList);
  const [newCategory, setNewCategory] = useState({
    name: "",
    image: "",
    description: "",
  });
  const changeHandler = (event) => {
    event.persist();
    setNewCategory((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(createCategory(newCategory));
  };
  return (
    <>
      <Paper className='p-4 bg-white rounded mt-3'>
        <h3 className='display-4 mb-3'>Tạo mới loại sản phẩm</h3>
        <form onSubmit={submitHandler}>
          <div className='form-group'>
            <label htmlFor='name'>Tên loại sản phẩm</label>
            <TextField
              name='name'
              value={newCategory.name}
              onChange={changeHandler}
              fullWidth
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='image'>Hình ảnh đại diện</label>
            <TextField
              name='image'
              value={newCategory.image}
              onChange={changeHandler}
              fullWidth
              required
            />
          </div>
          <div className='form-group'>
            <label>Mô tả loại sản phẩm</label>
            <CKEditor
              editor={ClassicEditor}
              data=''
              onReady={() => {
                console.log("Editor is ready to use!");
              }}
              onChange={(_, editor) => {
                const data = editor.getData();
                setNewCategory((prevState) => ({
                  ...prevState,
                  description: data,
                }));
              }}
            />
          </div>
          {loading && <ImgLoader />}
          {error && (
            <Alert severity='error' className="mb-3">
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
        to='/dashboard/category'
        color='inherit'
        className='mt-3'
        variant='contained'
      >
        &#8592; Quay lại
      </Button>
    </>
  );
};

export default NewCategory;
