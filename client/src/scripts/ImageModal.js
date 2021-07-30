import React from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import { PortalImg } from '../components/styles/Container.style';

const ImageModal = ({ isOpen, imgUrl }) => {
  if (!isOpen) return null;

  const hauteur = $(window).height() - 150;
  const longuer = $(window).width() - 500;

  return ReactDOM.createPortal(
    <PortalImg>
      <img src={imgUrl} height={hauteur} width={longuer} />
    </PortalImg>,
    document.getElementById('portal')
  );
};

export default ImageModal;
