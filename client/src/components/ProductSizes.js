import React, { useState, useContext } from 'react';
import $ from 'jquery';
import { StyleContext } from './App';

const ProductSizes = ({ sizes }) => {
  const [quantity, setQuantity] = useState([1]);
  const matchQuantity = (e) => {
    let arrQuantity = [];
    for (let i = 1; i < e.target.value; i++) {
      arrQuantity.push(i);
    }
    setQuantity(arrQuantity);
  };
  // const sizes = useContext(StyleContext);
  return (
    <div>
      {console.log(sizes)}
      <div className="selectSize">
        <select
          style={{ padding: '10px 10px', marginRight: '20px' }}
          onChange={matchQuantity}
        >
          <option>SELECT SIZE</option>
          {sizes &&
            sizes.map((elm, index) => (
              <option key={index} value={elm.quantity}>
                {elm.size}
              </option>
            ))}
        </select>

        <select style={{ padding: '10px 10px' }} onChange={matchQuantity}>
          {quantity.map((elm, index) => (
            <option key={index} value={elm}>
              {elm}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductSizes;
