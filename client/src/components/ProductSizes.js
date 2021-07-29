import React, { useEffect, useState } from 'react';
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
      .get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${productID}/styles`,
        {
          headers: {
            Authorization: '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',
          },
        }
      )
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
      TEST
      <div className="selectSize">
        <select onChange={matchQuantity}>
          <option>SELECT SIZE</option>
          {sizes.map((elm) => (
            <option value={elm.quantity}>{elm.size}</option>
          ))}
        </select>

        <select onChange={matchQuantity}>
          {quantity.map((elm) => (
            <option value={elm}>{elm}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductSizes;
