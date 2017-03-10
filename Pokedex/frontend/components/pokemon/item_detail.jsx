import React from 'react';

export const ItemDetail = (props) => {
  return (
    <ul>Item: {props.item.name}
      <li>Price: {props.item.price}</li>
      <li>Happiness: {props.item.happiness}</li>
    </ul>
  );
};
