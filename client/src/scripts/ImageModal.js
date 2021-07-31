import React from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import { PortalImg, ImgZoom } from '../components/styles/Container.style';

const ImageModal = ({ isOpen, imgUrl, onClickPic }) => {
  if (!isOpen) return null;

  const hauteur = $(window).height() - 100 + 'px';
  const longuer = $(window).width() - 400 + 'px';

  return ReactDOM.createPortal(
    <PortalImg>
      <div
        style={{
          textAlign: 'center',
          cursor: 'pointer',
          color: 'white',
          fontWeight: 'bolder',
        }}
        onClick={() => onClickPic(!isOpen)}
      >
        [X] CLOSE
      </div>
      <ImgZoom srcImg={imgUrl} height={hauteur} width={longuer} />
    </PortalImg>,
    document.getElementById('portal')
  );
};

export default ImageModal;
/*
<span style={{ cursor: 'pointer' }} onClick={() => onClickPic(!isOpen)}>
          [X] CLOSE
        </span>

        <div
        style={{ textAlign: 'center', cursor: 'pointer' }}
        onClick={() => onClickPic(!isOpen)}
      >
        [X] CLOSE
      </div>
*/
