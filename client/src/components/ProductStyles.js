import React, { useEffect, useState } from 'react';
import { StylesDiv } from './styles/Container.style';
import axios from 'axios';

const ProductStyles = ({ productID, changeStyle }) => {
  const [styleID, setStyleID] = useState([]);

  useEffect(() => {
    var i = 0;
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
        res.data.results.map((item) =>
          setStyleID((prevState) => {
            return [
              ...prevState,
              { id: i++, thumbnail: item.photos[0].thumbnail_url },
            ];
          })
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <StylesDiv>
      <h4 style={{ display: 'inline-block', margin: '0px' }}> STYLE > </h4>
      <span style={{ fontSize: '.9em' }}> SELECTED STYLE</span>
      <div style={{ cursor: 'pointer' }}>
        {styleID.map((elm) => (
          <img
            width="70px"
            height="70px"
            src={elm.thumbnail}
            style={{ borderRadius: '100%', margin: '10px' }}
            onClick={() => changeStyle(elm.id)}
          />
        ))}
      </div>
    </StylesDiv>
  );
};

export default ProductStyles;
