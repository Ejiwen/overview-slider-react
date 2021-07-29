import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const GaleryComponent = ({ productID, styleIndex, widenFn }) => {
  const [styleProduct, setStyleProduct] = useState([]);
  const [picIndex, setPicIndex] = useState(1);
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

    if (picIndex + dir <= 0) {
      $('.previousPic').hide();
    } else {
      $('.previousPic').show();
    }

    if (picIndex + dir >= styleProduct.length - 1) {
      $('.nextPic').hide();
    } else {
      $('.nextPic').show();
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <span
        style={{ position: 'absolute', top: '20px', right: '20px' }}
        onClick={widenFn}
      >
        <i class="fa-solid fa-user"></i>
      </span>

      <span
        style={{
          position: 'absolute',
          top: '50%',
          left: '80px',
          transform: 'rotate(-180deg)',
          fontSize: 'xx-large',
          textShadow: '3px 1px 0px #ffffffed, 5px 0px 0px rgb(0 0 0 / 15%)',
          cursor: 'pointer',
        }}
        className="previousPic"
        onClick={() => carrousel(-1)}
      >
        ➜
      </span>
      <span
        style={{
          position: 'absolute',
          top: '50%',
          right: '20px',
          fontSize: 'xx-large',
          textShadow: '3px 1px 0px #ffffffed, 5px 0px 0px rgb(0 0 0 / 15%)',
          cursor: 'pointer',
        }}
        className="nextPic"
        onClick={() => carrousel(1)}
      >
        ➜
      </span>
      <div style={{ position: 'absolute', top: '20px', cursor: 'pointer' }}>
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
