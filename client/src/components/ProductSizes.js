import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import axios from 'axios';

const ProductSizes = ({ productID, styleIndex }) => {
  const [sizes, setSizes] = useState([]);
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

  return (
    <div>
      TEST
      <div className="selectSize">
        <select>
          {sizes.map((elm) => (
            <option>{elm.size}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductSizes;
