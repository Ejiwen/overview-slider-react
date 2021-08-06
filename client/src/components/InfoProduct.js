import React, { useContext } from 'react';
import { InfoContext } from './App';

const InfoProduct = () => {
  const info = useContext(InfoContext);
  return (
    <div>
      <span>{info.infoData.category}</span>
      <h3 style={{ margin: '0px' }}>{info.infoData.name}</h3>
      <span>{info.infoData.price} $</span>
      {console.log('+++++++++> ' + info.sizesData.length)}
    </div>
  );
};

export default InfoProduct;
