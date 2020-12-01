import React from "react";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Modal from "../../UI/Modal/Modal";
import CloseIcon from "@material-ui/icons/Close";
import { Button, Typography } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

const ConfirmDelete = ({ show, close, clicked }) => {
  return (
    <>
      <Backdrop clicked={close} show={show} />
      <Modal>
        <button className='btn' style={{ float: "right" }} onClick={close}>
          <CloseIcon />
        </button>
        <div className='p-3 m-3'>
          <Alert severity='error' className='mb-3'>
            Bạn có chắc muốn xóa?
          </Alert>
          <Typography variant="body1" className="mb-3">
            Hành động này không thể khôi phục sau khi xác nhận!
          </Typography>
          <Button
            variant='contained'
            color='secondary'
            onClick={clicked}
            className='mr-2'
          >
            Xác nhận
          </Button>
          <Button variant='contained' onClick={close}>
            Hủy
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ConfirmDelete;
