import React, { useContext } from 'react';
import { InfoContext } from './App';
import axios from 'axios';

const InfoProduct = () => {
  const info = useContext(InfoContext);
  return (
    <div>
      <span>{info.category}</span>
      <h3 style={{ margin: '0px' }}>{info.name}</h3>
      <span>{info.price} $</span>
    </div>
  );
};

export default InfoProduct;
