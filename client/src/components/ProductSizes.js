import React, { useEffect, useState } from 'react';
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
    <h1 onClick={() => console.log(sizes)}>Hello from ProductSizes ... </h1>
  );
};

export default ProductSizes;
