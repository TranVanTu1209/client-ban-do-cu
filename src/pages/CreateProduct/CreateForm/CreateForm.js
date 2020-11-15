import React, { useState } from 'react';
import classes from './CreateForm.module.css';
import { TextField, Button, FormControlLabel, Checkbox, FormControl, Select, MenuItem, InputLabel } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../../store/actions/product/productAction';
import { setAlert } from '../../../store/actions/alert/alertAction';

const CreateForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [originPrice, setOriginPrice] = useState('');
  const [soldOut, setSoldOut] = useState(false);
  const [category, setCategory] = useState('cate1');
  const [categories] = useState(['cate1', 'cate2', 'cate3', 'cate4', 'cate5', 'cate6', 'cate7', 'cate8', 'cate9', 'cate10']);
  const dispatch = useDispatch();

  const onCreateProduct = (e) => {
    e.preventDefault();
    if (title && image && price > 0 && originPrice > 0 && category && description && price < originPrice)
    {
      dispatch(createProduct(title, image, price, originPrice, description, category, soldOut));
      setTitle('');
      setDescription('');
      setImage('');
      setPrice('');
      setOriginPrice('');
      setCategory('cate1');
    } else
    {
      dispatch(setAlert('Vui lòng điền thông tin sản phẩm hợp lệ', 'Danger'));
    }
  }
  return (
    <form className={classes.CreateForm} onSubmit={onCreateProduct}>
      <h3>Thêm sản phẩm</h3>
      <div className={classes.Mb2}>
        <TextField fullWidth placeholder="Tiêu đề sản phẩm" value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div className={classes.Mb2}>
        <TextField fullWidth placeholder="Mô tả sản phẩm" value={description} onChange={e => setDescription(e.target.value)} />
      </div>
      <div className={classes.Mb2}>
        <TextField fullWidth placeholder="Đường dẫn ảnh sản phẩm" value={image} onChange={e => setImage(e.target.value)} />
      </div>
      <FormControl fullWidth>
        <InputLabel id="category-select">Thể loại</InputLabel>
        <Select
          labelId="category-select"
          id="product-catefory-select-options"
          value={category}
          onChange={e => setCategory(e.target.value)}>
          {
            categories.map(c => (
              <MenuItem key={c} value={c}> {c} </MenuItem>
            ))
          }
        </Select>
      </FormControl>
      <FormControlLabel
        control={<Checkbox checked={soldOut} onChange={e => setSoldOut(e.target.checked)} />}
        label="Hết sản phẩm"
      />
      <div className={classes.Mb2}>
        <TextField type="number" fullWidth placeholder="Giá khuyến mại" value={price}
          onChange={e => setPrice(Number(e.target.value))} />
      </div>
      <div className={classes.Mb2}>
        <TextField type="number" fullWidth placeholder="Giá gốc" value={originPrice}
          onChange={e => setOriginPrice(Number(e.target.value))} />
      </div>
      <Button type="submit" variant="contained" color="secondary">
        Lưu sản phẩm
      </Button>
    </form>
  );
}

export default CreateForm;
