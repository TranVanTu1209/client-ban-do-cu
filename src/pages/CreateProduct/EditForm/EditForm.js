import React, { useState, useEffect } from 'react';
import classes from './EditForm.module.css';
import { TextField, Button, FormControlLabel, Checkbox, FormControl, Select, MenuItem, InputLabel } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct, deleteProduct } from '../../../store/actions/product/productAction';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../../../components/UI/Spinner/Spinner';

const EditForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [originPrice, setOriginPrice] = useState('');
  const [soldOut, setSoldOut] = useState(false);
  const [category, setCategory] = useState('');
  const [categories] = useState(['cate1', 'cate2', 'cate3', 'cate4', 'cate5', 'cate6', 'cate7', 'cate8', 'cate9', 'cate10']);
  const productId = useParams().pId;
  const { products, loading } = useSelector(state => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    const product = products.find(p => p.id === productId);
    if (product)
    {
      setTitle(product.title); setDescription(product.description || ''); setImage(product.image);
      setPrice(product.price); setOriginPrice(product.originPrice); setSoldOut(product.soldOut);
      setCategory(product.category);
    }
  }, [productId, products]);

  const onUpdateProduct = (e) => {
    e.preventDefault();
    dispatch(updateProduct(productId, { title, description, image, price, originPrice, soldOut, category }));
  }
  const onDeleteProduct = () => {
    dispatch(deleteProduct(productId));
    setTitle(''); setDescription(''); setImage(''); setPrice(''); setOriginPrice('');
    setSoldOut(false); setCategory('');
  }
  return (<React.Fragment>
    {
      loading && <Spinner />
    }
    <form className={classes.EditForm} onSubmit={onUpdateProduct}>
      <h3>Chỉnh sửa sản phẩm</h3>
      <div className={classes.Mb2}>
        <TextField fullWidth placeholder="Tiêu đề sản phẩm" value={title}
          onChange={e => setTitle(e.target.value)} />
      </div>
      <div className={classes.Mb2}>
        <TextField fullWidth placeholder="Mô tả sản phẩm" value={description}
          onChange={e => setDescription(e.target.value)} />
      </div>
      <div className={classes.Mb2}>
        <TextField fullWidth placeholder="Đường dẫn ảnh sản phẩm" value={image}
          onChange={e => setImage(e.target.value)} />
      </div>
      <FormControl fullWidth>
        <InputLabel id="category-select">Thể loại</InputLabel>
        <Select
          labelId="category-select" id="product-catefory-select-options"
          value={category} onChange={e => setCategory(e.target.value)}>
          {
            categories.map(c => (
              <MenuItem key={c} value={c}> {c} </MenuItem>
            ))
          }
        </Select>
      </FormControl>
      <FormControlLabel
        control={<Checkbox checked={soldOut} onChange={e => setSoldOut(e.target.checked)} />}
        label="Hết sản phẩm" />
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
      <Button type="submit" variant="contained" onClick={onDeleteProduct}>
        Xóa
      </Button>
      <Link to='/new/product'>
        Quay lại
      </Link>
    </form>
  </React.Fragment>
  );
}

export default EditForm;
