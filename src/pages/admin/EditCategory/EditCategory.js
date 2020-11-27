import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Link, useParams } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useSelector, useDispatch } from "react-redux";
import { createCategory } from "../../../store/actions/admin/category";
import { getCategoryDetail } from "../../../store/actions/public/category";
import ImgLoader from "../../../components/UI/ImgLoader/ImgLoader";
import Alert from "@material-ui/lab/Alert";

const EditCategory = () => {
  const { cId } = useParams();
  const dispatch = useDispatch();
  const { loading, error, category } = useSelector(
    (state) => state.categoryDetail
  );
  const [updatedCategory, setUpdatedCategory] = useState({
    name: "",
    image: "",
    description: "",
  });
  useEffect(() => {
    dispatch(getCategoryDetail(cId));
  }, [dispatch, cId]);

  useEffect(() => {
    if (category.name) {
      setUpdatedCategory({
        name: category.name,
        image: category.image,
        description: category.description,
      });
    }
  }, [category]);

  const changeHandler = (event) => {
    event.persist();
    setUpdatedCategory((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(createCategory(getCategoryDetail));
  };
  console.log(category);
  return (
    <>
      <Paper className='p-4 bg-white rounded mt-3'>
        {loading && <ImgLoader />}
        {error && (
          <Alert severity='error' className='mb-3'>
            {error?.response?.data?.message || "Lỗi xảy ra. Vui lòng thử lại"}
          </Alert>
        )}
        <h3 className='display-4 mb-3'>Cập nhật/Chỉnh sửa loại sản phẩm</h3>
        {!loading && !error && (
          <>
            <form onSubmit={submitHandler}>
              <div className='form-group'>
                <label htmlFor='name'>Tên loại sản phẩm</label>
                <TextField
                  name='name'
                  value={updatedCategory.name}
                  onChange={changeHandler}
                  fullWidth
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='image'>Hình ảnh đại diện</label>
                <TextField
                  name='image'
                  value={updatedCategory.image}
                  onChange={changeHandler}
                  fullWidth
                  required
                />
              </div>
              <div className='form-group'>
                <label>Mô tả loại sản phẩm</label>
                <CKEditor
                  editor={ClassicEditor}
                  data={updatedCategory.description}
                  onReady={() => {
                    console.log("Editor is ready to use!");
                  }}
                  onChange={(_, editor) => {
                    const data = editor.getData();
                    setUpdatedCategory((prevState) => ({
                      ...prevState,
                      description: data,
                    }));
                  }}
                />
              </div>
              <Button variant='contained' type='submit' color='primary'>
                Xác nhận
              </Button>
            </form>
          </>
        )}
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

export default EditCategory;
