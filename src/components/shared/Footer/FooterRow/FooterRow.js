import React from 'react';
import classes from './FooterRow.module.css';

const FooterRow = (props) => {
  return (
    <div className={classes.FooterRow}>
      <h3> {props.title} </h3>
      {
        props.children
      }
      <ul>
        {
          props.linkItems?.map((item, id) => <li key={id}>
            {
              item
            }
          </li>)
        }
      </ul>
    </div>
  )
}

export default FooterRow;
