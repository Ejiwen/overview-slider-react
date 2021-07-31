import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import axios from 'axios';
import lazy from '../scripts/lazyLoad.js';
import picSelected from '../scripts/picSelected.js';
import ImageModal from '../scripts/ImageModal.js';
import Zoom from '../scripts/zoomImage.js';
import { Thumbnails } from './styles/Container.style';
import { PortalImg, ImgZoom } from '../components/styles/Container.style';

const GaleryComponent = ({ productID, styleIndex, widenFn }) => {
  const [styleProduct, setStyleProduct] = useState([]);
  const [picIndex, setPicIndex] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

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
          //item.url = item.url.replace(/&w=\d+/, "&w=10");
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

  const scrollFn = () => {
    $('.thumbnails').animate({ scrollTop: +400 }, 1000);
  };

  const scrollFnTop = () => {
    $('.thumbnails').animate({ scrollTop: -400 }, 1000);
  };

  return (
    <div style={{ position: 'relative' }}>
      <span
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          color: 'white',
          fontSize: '2rem',
          cursor: 'pointer',
        }}
        onClick={widenFn}
      >
        ⊡
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
      <Thumbnails className="thumbnails">
        {styleProduct.map((item) => (
          <img
            style={{
              display: 'block',
              marginBottom: '15px',
              marginLeft: '20px',
              border: '2px solid white',
            }}
            width="40px"
            height="40px"
            src={item.thumbnail}
            onClick={() => {
              setPicIndex(item.id);
              picSelected.SelectImg(item.id);
            }}
            data-id={item.id.toString()}
          />
        ))}
      </Thumbnails>

      <span
        style={{
          position: 'absolute',
          top: '2px',
          left: '35px',
          cursor: 'pointer',
          color: 'white',
          textShadow:
            'rgba(0,0,0, 0.4) 0px 5px, rgba(0,0,0, 0.3) 0px 10px, rgba(0,0,0, 0.2) 0px 15px, rgba(0,0,0, 0.1) 0px 20px, rgba(0,0,0, 0.05) 0px 25px',
        }}
        // onClick={picSelected.ScrollThumbnails}
        onClick={scrollFnTop}
        className="scrollClassTop"
      >
        ▲
      </span>

      <span
        style={{
          position: 'absolute',
          top: '315px',
          left: '35px',
          cursor: 'pointer',
          color: 'white',
          textShadow:
            'rgba(0,0,0, 0.4) 0px 5px, rgba(0,0,0, 0.3) 0px 10px, rgba(0,0,0, 0.2) 0px 15px, rgba(0,0,0, 0.1) 0px 20px, rgba(0,0,0, 0.05) 0px 25px',
        }}
        // onClick={picSelected.ScrollThumbnails}
        onClick={scrollFn}
        className="scrollClass"
      >
        ▼
      </span>
      <div style={{ display: 'flex', maxHeight: '600px' }}>
        {styleProduct[picIndex] && (
          <img
            width="100%"
            height="600px"
            src={styleProduct[picIndex].url.replace(/&w=\d+/, '&w=10')}
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
      </div>
      {styleProduct[picIndex] && (
        <ImageModal
          isOpen={isOpen}
          imgUrl={styleProduct[picIndex].url}
          onClickPic={setIsOpen}
        />
      )}
      {lazy.leazyImg()}
    </div>
  );
};

export default GaleryComponent;
// {lazy.leazyImg()}
// <ImgZoom srcImg={imgUrl} height={hauteur} width={longuer} />
