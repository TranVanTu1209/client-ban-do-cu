import React, { useEffect } from 'react';
import classes from './Profile.module.css';
import ProfileContent from './ProfileContent/ProfileContent';
import ProfileSidebar from './ProfileSidebar/ProfileSidebar';
import { Button, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const Profile = () => {
  const history = useHistory();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  return (
    <div className={classes.Profile}>
      <Grid container spacing={2}>
        <Grid item md={3} xs={12}>
          <ProfileSidebar />
        </Grid>
        <Grid item md={9} xs={12}>
          <Button className="bg-secondary mb-2" onClick={() => history.goBack()}>
            Quay lại
          </Button>
          <ProfileContent />
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;
