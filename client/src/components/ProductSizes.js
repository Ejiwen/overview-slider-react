import React, { useState, useEffect, useContext } from 'react';
import $ from 'jquery';
//import { StyleContext } from './App';
import { InfoContext } from './App';

const ProductSizes = ({ productID, styleIndex }) => {
  const [sizes, setSizes] = useState([]);
  const [quantity, setQuantity] = useState([1]);
  const sizesInfos = useContext(InfoContext);
  var k = 0;
  var arr = [];
  useEffect(() => {
    var i = 0;
    var listKeys;

    sizesInfos.sizesData.map((item) => {
      listKeys = Object.keys(item.skus);
      console.log('---------' + arr);
      return arr.push({ id: i++, skus: item.skus });
    });
    // arr = arr.filter((item) => item.id === styleIndex);
    // listKeys = Object.keys(arr[0].skus);
    // listKeys.map((elm) =>
    //   setSizes((prevState) => [...prevState, arr[0].skus[elm]])
    // );
    console.log('---------' + sizesInfos.sizesData.length);
    console.log('*************');
  }, []);

  const matchQuantity = (e) => {
    let arrQuantity = [];
    for (let i = 1; i < e.target.value; i++) {
      arrQuantity.push(i);
    }
    setQuantity(arrQuantity);
  };

  return (
    <div>
      <div className="selectSize">
        <select
          style={{ padding: '10px 10px', marginRight: '20px' }}
          onChange={matchQuantity}
        >
          <option>SELECT SIZE</option>
          {sizes.map((elm, index) => (
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
      <span onClick={() => console.log(arr)}>TEST</span>
    </div>
  );
};

export default ProductSizes;
