import React, { useEffect, useState } from 'react';
import styles from '../data/styles.js';
import $ from 'jquery';
import axios from 'axios';

const ProductSizes = ({ productID, styleIndex }) => {
  const [sizes, setSizes] = useState([]);
  const [quantity, setQuantity] = useState([1]);
  var k = 0;
  var arr = [];
  useEffect(() => {
    var i = 0;
    var listKeys;

    axios
      .get(`/products/${productID}/styles`)
      .then((res) => {
        res.data.results.map((item) => {
          listKeys = Object.keys(item.skus);
          arr.push({ id: i++, skus: item.skus });
        });
        arr = arr.filter((item) => item.id === styleIndex);
        let listKeys = Object.keys(arr[0].skus);
        listKeys.map((elm) =>
          setSizes((prevState) => [...prevState, arr[0].skus[elm]])
        );
      })
      .catch((error) => {
        console.error(error);
      });
      arr = arr.filter((item) => item.id === styleIndex);
      let listKeys = Object.keys(arr[0].skus);
      listKeys.map((elm) =>
        setSizes((prevState) => [...prevState, arr[0].skus[elm]])
      );
    })();
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
    </div>
  );
};

export default ProductSizes;
