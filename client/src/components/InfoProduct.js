import React, { useEffect, useState } from 'react';
import product_info from '../data/product_info.js';
import axios from 'axios';

const InfoProduct = ({ productID }) => {
  const [productInfo, setProductInfo] = useState({});
  var arr = [];
  useEffect(() => {
    setProductInfo({
      category: product_info.category,
      name: product_info.name,
      price: product_info.default_price,
    });
  }, [productID]);

  return (
    <div>
      <span>{productInfo.category}</span>
      <h3 style={{ margin: '0px' }}>{productInfo.name}</h3>
      <span>{productInfo.price} $</span>
    </div>
  );
};

export default InfoProduct;
