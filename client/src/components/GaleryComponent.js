import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GaleryComponent = ({ productID }) => {
  const [styleProduct, setStyleProduct] = useState([]);
  const [picIndex, setPicIndex] = useState(2);

  useEffect(() => {
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
        res.data.results[0].photos.map((item) =>
          setStyleProduct((prevState) => [...prevState, item.url])
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const carrousel = (dir) => {
    if (dir < 0) {
      if (picIndex > 0) {
        setPicIndex(picIndex + dir);
      }
    } else {
      if (picIndex < styleProduct.length - 1) {
        setPicIndex(picIndex + dir);
      }
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <span style={{ position: 'absolute' }} onClick={() => carrousel(-1)}>
        PREVIOUS
      </span>
      <span
        style={{ position: 'absolute', right: '0' }}
        onClick={() => carrousel(1)}
      >
        NEXT
      </span>

      <div style={{ position: 'absolute', top: '40px' }}>
        {styleProduct.map((item) => (
          <img
            style={{ display: 'block', marginBottom: '5px' }}
            width="40px"
            height="40px"
            src={item}
          />
        ))}
      </div>

      <div style={{ display: 'flex', maxHeight: '600px' }}>
        <img width="100%" src={styleProduct[picIndex]} />
      </div>
    </div>
  );
};

export default GaleryComponent;
