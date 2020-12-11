import React, { useEffect } from "react";
import classes from "../../Login/Login.module.css";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../components/UI/Spinner/Spinner";
import { useForm } from "react-hook-form";
import { register as registerVendorSaga } from "../../../store/actions/user/authAction";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

const NewVendor = () => {
  const dispatch = useDispatch();
  const { provinces } = useSelector((state) => state.provinceList);
  const { loading, error } = useSelector((state) => state.auth);
  const { register, handleSubmit, watch, errors } = useForm();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  const onCreateVendor = (data) => {
    dispatch(
      registerVendorSaga({
        ...data,
        role: 2,
        password_confirmation: undefined,
      })
    );
  };
  if (loading) return <Spinner />;
  return (
    <React.Fragment>
      {loading && <Spinner />}
      {error && (
        <Snackbar open={true} autoHideDuration={6000}>
          <Alert severity='success'>
            {error?.response?.data?.message || "Lỗi xảy ra. Vui lòng thử lại"}
          </Alert>
        </Snackbar>
      )}
      <form className={classes.LoginForm}>
        <h3>Tạo mới nhà cung cấp</h3>
        <div className={classes.FormGroup}>
          <input
            className={`${errors.name ? "error-input" : ""}`}
            placeholder='Họ tên'
            type='text'
            name='name'
            ref={register({
              required: true,
              minLength: 1,
              pattern: {
                value: /^[a-z0-9_-]{3,15}$/i,
                message: "Tên người dùng không hợp lệ",
              },
            })}
          />
          {errors.name && (
            <small className='error-text'>
              {errors.name.message || "Vui lòng điền tên người dùng"}
            </small>
          )}
        </div>
        <div className={classes.FormGroup}>
          <input
            className={`${errors.email ? "error-input" : ""}`}
            placeholder='Email'
            type='email'
            name='email'
            ref={register({
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email không hợp lệ",
              },
            })}
          />
          {errors.email && (
            <small className='error-text'>
              {errors.email.message || "Vui lòng nhập email hợp lệ"}
            </small>
          )}
        </div>
        <div className={classes.FormGroup}>
          <input
            className={`${errors.phone_number ? "error-input" : ""}`}
            placeholder='Số điện thoại'
            type='tel'
            name='phone_number'
            ref={register({
              required: true,
              minLength: 10,
              maxLength: 10,
            })}
          />
          {errors.phone_number && (
            <small className='error-text'> Số điện thoại không hợp lệ </small>
          )}
        </div>
        <div className={classes.FormGroup}>
          {
            <select
              className={`${errors.address ? "error-input" : ""}`}
              name='address'
              ref={register({
                required: true,
              })}
            >
              <option value=''>Vui lòng chọn 1 tỉnh thành</option>
              {provinces.map((p) => (
                <option key={p.province_id} value={p.province_id}>
                  {p.province_name}
                </option>
              ))}
            </select>
          }
          {errors.address && (
            <small className='error-text'> Địa chỉ không hợp lệ </small>
          )}
        </div>
        <div className={classes.FormGroup}>
          <input
            className={`${errors.age ? "error-input" : ""}`}
            placeholder='Tuổi'
            type='tel'
            name='age'
            ref={register({
              required: true,
              maxLength: {
                value: 3,
              },
            })}
          />
          {errors.age && (
            <small className='error-text'> Tuổi không hợp lệ </small>
          )}
        </div>

        <div className={classes.FormGroup}>
          <input
            className={`${errors.password ? "error-input" : ""}`}
            placeholder='Mật khẩu'
            type='password'
            name='password'
            ref={register({
              validate: (value) => value.length >= 5 || "Mật khẩu yếu",
            })}
          />
          {errors.password && (
            <small className='error-text'> {errors.password.message} </small>
          )}
        </div>
        <div className={classes.FormGroup}>
          <input
            className={`${errors.password_confirmation ? "error-input" : ""}`}
            placeholder='Nhập lại mật khẩu'
            type='password'
            name='password_confirmation'
            ref={register({
              required: true,
              validate: (value) =>
                value === watch("password") || "Mật khẩu không khớp",
            })}
          />
          {errors.password_confirmation && (
            <small className='error-text'>
              {errors.password_confirmation.message}
            </small>
          )}
        </div>
        <div className={classes.FormGroup}>
          <select
            name='gender'
            ref={register({
              required: true,
            })}
            className={`${errors.gender ? "error-input" : ""}`}
          >
            <option value='1'>Nam</option>
            <option value='2'>Nữ</option>
            <option value='3'>Khác</option>
          </select>
        </div>

        <Button
          variant='contained'
          color='primary'
          className='bg-primary'
          onClick={handleSubmit(onCreateVendor)}
        >
          Xác nhận
        </Button>
      </form>
    </React.Fragment>
  );
};

export default NewVendor;
