import React, { useEffect, useState, useRef } from "react";
import classes from "./ProfileContent.module.css";
import { Button, Card, CardContent, Grid } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../../store/actions/user/profileAction";
import ImgLoader from "../../../components/UI/ImgLoader/ImgLoader";
import Alert from "@material-ui/lab/Alert";

const acceptedFileTypes = ["image/jpeg", "image/jpg", "image/png"];

const ProfileContent = () => {
  const dispatch = useDispatch();
  const imageRef = useRef();
  const [file, setFile] = useState(null);
  const { loading, userInfo, error } = useSelector((state) => state.profile);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(1);
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (userInfo) {
      try {
        setName(userInfo.name !== undefined ? userInfo.name : "");
        setEmail(userInfo.email !== undefined ? userInfo.email : "");
        setAddress(userInfo.address !== undefined ? userInfo.address : "");
        setPhoneNumber(
          userInfo.phone_number !== undefined ? userInfo.phone_number : ""
        );
        setGender(userInfo.gender !== undefined ? userInfo.gender : "");
        setAge(userInfo.age !== undefined ? userInfo.age : 1);
        setAvatar(
          userInfo.avatar
            ? userInfo.avatar
            : "https://source.unsplash.com/random"
        );
      } catch (error) {
        console.log(error);
      }
    }
  }, [userInfo]);

  const chooseImageHandler = () => {
    imageRef.current.click();
    console.log(imageRef);
  };
  const imageChangeHandler = (event) => {
    const imageFile = event.target.files[0];
    if(acceptedFileTypes.includes(imageFile.type)) {
      setFile(imageFile);
    } else {
      alert('Vui lòng chọn file với định dạng (.png,.jpg,.jpeg)');
    }
  };
  const updateAvatarHandler = () => {
    
  }
  const updateProfileHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProfile({ name, email, address, phone_number, gender, age, avatar })
    );
  };
  return (
    <Card>
      <CardContent>
        <p>Thông tin tài khoản</p>
        {loading && <ImgLoader />}
        {error && (
          <Alert severity='error' className='mb-3'>
            {error?.response?.data?.message || "Lỗi xảy ra. Vui lòng thử lại"}
          </Alert>
        )}
        <form
          className={classes.ProfileContent}
          onSubmit={updateProfileHandler}
        >
          <Grid className={classes.FormGroup} container spacing={2}>
            <Grid item md={4}>
              Họ tên
            </Grid>
            <Grid item md={8}>
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid className={classes.FormGroup} container spacing={2}>
            <Grid item md={4}>
              Số điện thoại
            </Grid>
            <Grid item md={8}>
              <input
                type='text'
                value={phone_number}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid className={classes.FormGroup} container spacing={2}>
            <Grid item md={4}>
              E-mail
            </Grid>
            <Grid item md={8}>
              <input
                type='email'
                value={email}
                disabled
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid className={classes.FormGroup} container spacing={2}>
            <Grid item md={4}>
              Ảnh đại diện
            </Grid>
            <Grid item md={8}>
              <Grid container className='align-items-center'>
                <Grid item md={6}>
                  <img
                    className={classes.Avatar}
                    src={avatar}
                    alt='profile avatar'
                  />
                  <input
                    type='file'
                    className='d-none'
                    ref={imageRef}
                    onChange={imageChangeHandler}
                  />
                </Grid>
                <Grid item md={6}>
                  {
                    !file ? <Button
                    variant='contained'
                    color='secondary'
                    onClick={chooseImageHandler}
                  >
                    Thay ảnh
                  </Button> : <Button
                    variant='contained'
                    color='primary'
                    onClick={updateAvatarHandler}
                  >
                    Tải ảnh lên
                  </Button>
                  }
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.FormGroup} container spacing={2}>
            <Grid item md={4}>
              Địa chỉ
            </Grid>
            <Grid item md={8}>
              <input
                type='text'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid className={classes.FormGroup} container spacing={2}>
            <Grid item md={4}>
              Giới tính
            </Grid>
            <Grid item md={8}>
              <label>
                <input
                  type='radio'
                  name='gender'
                  value='male'
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                />{" "}
                Nam
              </label>
              <label>
                <input
                  type='radio'
                  name='gender'
                  value='female'
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                />{" "}
                Nữ
              </label>
            </Grid>
          </Grid>
          <Grid className={classes.FormGroup} container spacing={2}>
            <Grid item md={4}>
              Tuổi của bạn
            </Grid>
            <Grid item md={8}>
              <input
                type='number'
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid className={classes.FormGroup} container spacing={2}>
            <Grid item md={4}></Grid>
            <Grid item md={8}>
              <input
                type='submit'
                className='btn btn-yellow'
                value='Cập nhật'
              />
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default ProfileContent;
