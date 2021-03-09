import React from 'react';

function Item(props) {
  console.log(props);
  return (
    <li
      style={{ textDecoration: props.checked && 'line-through' }}
      onClick={() => props.strike(props)}
    >
      {props.listItem}
    </li>
  );
}

export default Item;
