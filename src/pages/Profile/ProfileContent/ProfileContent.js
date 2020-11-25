import React, { useEffect, useState } from 'react';
import classes from './ProfileContent.module.css';
import { Card, CardContent, Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { getProfile, updateProfile } from '../../../store/actions/user/authAction';
import ImgLoader from '../../../components/UI/ImgLoader/ImgLoader';

const ProfileContent = () => {
  const dispatch = useDispatch();
  const { uid, profile, loading } = useSelector(state => state.auth);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState(1);

  useEffect(() => {
    if (uid && !profile) dispatch(getProfile(uid));
  }, [dispatch, uid, profile]);

  useEffect(() => {
    if (profile)
    {
      try
      {
        setName(profile.name !== undefined ? profile.name : '');
        setEmail(profile.email !== undefined ? profile.email : '');
        setAddress(profile.address !== undefined ? profile.address : '');
        setPhoneNumber(profile.phoneNumber !== undefined ? profile.phoneNumber : '');
        setGender(profile.gender !== undefined ? profile.gender : '');
        setAge(profile.age !== undefined ? profile.age : 1);
      } catch (error)
      {
        console.log(error);
      }
    }
  }, [profile, dispatch]);

  const updateProfileHandler = (e) => {
    e.preventDefault();
    dispatch(updateProfile(uid, { name, email, address, phoneNumber, gender, age }));
  }
  return (
    <Card>
      <CardContent>
        <p>Thông tin tài khoản</p>
        {
          loading ? <ImgLoader /> : <form className={classes.ProfileContent} onSubmit={updateProfileHandler}>
            <Grid className={classes.FormGroup} container spacing={2}>
              <Grid item md={4}>
                Họ tên
              </Grid>
              <Grid item md={8}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
              </Grid>
            </Grid>
            <Grid className={classes.FormGroup} container spacing={2}>
              <Grid item md={4}>
                Số điện thoại
              </Grid>
              <Grid item md={8}>
                <input type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
              </Grid>
            </Grid>
            <Grid className={classes.FormGroup} container spacing={2}>
              <Grid item md={4}>
                E-mail
            </Grid>
              <Grid item md={8}>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
              </Grid>
            </Grid>
            <Grid className={classes.FormGroup} container spacing={2}>
              <Grid item md={4}>
                Địa chỉ
              </Grid>
              <Grid item md={8}>
                <input type="text" value={address} onChange={e => setAddress(e.target.value)} />
              </Grid>
            </Grid>
            <Grid className={classes.FormGroup} container spacing={2}>
              <Grid item md={4}>
                Giới tính
              </Grid>
              <Grid item md={8}>
                <label><input type="radio" name="gender" value="male" checked={gender === 'male'}
                  onChange={e => setGender(e.target.value)} /> Nam</label>
                <label><input type="radio" name="gender" value="female" checked={gender === 'female'}
                  onChange={e => setGender(e.target.value)} /> Nữ</label>
              </Grid>
            </Grid>
            <Grid className={classes.FormGroup} container spacing={2}>
              <Grid item md={4}>
                Tuổi của bạn
              </Grid>
              <Grid item md={8}>
                <input type="number" value={age} onChange={e => setAge(e.target.value)} />
              </Grid>
            </Grid>
            <Grid className={classes.FormGroup} container spacing={2}>
              <Grid item md={4}>
              </Grid>
              <Grid item md={8}>
                <input type="submit" className="btn btn-yellow" value="Cập nhật" />
              </Grid>
            </Grid>
          </form>
        }
      </CardContent>
    </Card>
  );
}

export default ProfileContent;