import React, { useEffect, useState } from 'react';
import styles from '../data/styles.js';
import { StylesDiv } from './styles/Container.style';
import picSelected from '../scripts/picSelected.js';
import axios from 'axios';

const ProductStyles = ({ productID, changeStyle }) => {
  const [styleID, setStyleID] = useState([]);
  const [styleName, setStyleName] = useState('SELECTED STYLE');

  useEffect(() => {
    var i = 0;

    styles.results.map((item) =>
      setStyleID((prevState) => {
        return [
          ...prevState,
          {
            id: i++,
            name: item.name,
            thumbnail: item.photos[0].thumbnail_url,
          },
        ];
      })
    );
  }, []);

  return (
    <StylesDiv>
      <h4 style={{ display: 'inline-block', margin: '0px' }}> STYLE > </h4>
      <span style={{ fontSize: '.9em' }}> {styleName} </span>
      <div
        id="styleList"
        style={{ cursor: 'pointer', width: '354px', position: 'relative' }}
      >
        {styleID.map((elm, index) => (
          <figure
            key={index}
            style={{ display: 'inline', margin: '0', position: 'relative' }}
          >
            <img
              style={{ display: 'inline' }}
              width="70"
              height="70"
              src={elm.thumbnail}
              style={{ borderRadius: '100%', margin: '10px' }}
              onClick={() => {
                changeStyle(elm.id);
                picSelected.SelectStyle(elm.id);
                setStyleName(elm.name);
              }}
              data-style={elm.id.toString()}
            />
            <figcaption
              data-caption={elm.id}
              style={{ display: 'inline', margin: '0' }}
            ></figcaption>
          </figure>
        ))}
      </div>
    </StylesDiv>
  );
};

export default ProductStyles;
