import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GaleryComponent = ({ productID, styleIndex }) => {
  const [styleProduct, setStyleProduct] = useState([]);
  const [picIndex, setPicIndex] = useState(2);
  //const [styleID, setStyleID] = useState(styleIndex);
  //setStyleProduct([]);

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
        let i = 0;
        setStyleProduct([]);
        res.data.results[styleIndex].photos.map((item) =>
          setStyleProduct((prevState) => [
            ...prevState,
            { id: i++, thumbnail: item.thumbnail_url, url: item.url },
          ])
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }, [styleIndex]);

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
      <div style={{ position: 'absolute', top: '20px' }}>
        {styleProduct.map((item) => (
          <img
            style={{
              display: 'block',
              marginBottom: '5px',
              marginLeft: '20px',
            }}
            width="40px"
            height="40px"
            src={item.thumbnail}
            onClick={() => setPicIndex(item.id)}
          />
        ))}
      </div>
      <div style={{ display: 'flex', maxHeight: '600px' }}>
        {styleProduct[picIndex] && (
          <img width="100%" height="600px" src={styleProduct[picIndex].url} />
        )}
      </div>
    </div>
  );
};

export default GaleryComponent;
