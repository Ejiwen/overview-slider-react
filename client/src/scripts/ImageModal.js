import React from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import { PortalImg, ImgZoom } from '../components/styles/Container.style';
import Zoom from './zoomImage.js';

const ImageModal = ({ isOpen, imgUrl, onClickPic }) => {
  if (!isOpen) return null;

  const hauteur = $(window).height() - 10 + 'px';
  const longuer = '800px';

  return ReactDOM.createPortal(
    <PortalImg>
      <div
        style={{
          textAlign: 'center',
          cursor: 'pointer',
          color: 'black',
          fontWeight: 'bolder',
        }}
        onClick={() => onClickPic(!isOpen)}
      >
        [X] CLOSE
      </div>
      <ImgZoom
        onMouseMove={Zoom.zoomer}
        className="imagePortal"
        srcImg={imgUrl}
        height={hauteur}
        width={longuer}
      />
      <div className="box"></div>
    </PortalImg>,
    document.getElementById('portal')
  );
};

export default ImageModal;
