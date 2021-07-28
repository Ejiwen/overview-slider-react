import React, { useState } from 'react';
import GaleryComponent from './GaleryComponent';
import RatingComponent from './RatingComponent.js';
import InfoProduct from './InfoProduct.js';
import ProductStyles from './ProductStyles.js';
import ProductSizes from './ProductSizes.js';
import CheckBag from './CheckBag.js';
import { Container, RightSide } from './styles/Container.style';

const App = () => {
  const [styleIndex, setStyleIndex] = useState(0);

  const changeStyle = (styleid) => {
    //console.log(styleid);
    setStyleIndex(styleid);
  };

  return (
    <Container>
      <GaleryComponent productID="25167" styleIndex={styleIndex} />
      <RightSide>
        <RatingComponent />
        <InfoProduct productID="25167" />
        <ProductStyles productID="25167" changeStyle={changeStyle} />
        <ProductSizes />
        <CheckBag />
      </RightSide>
    </Container>
  );
};

export default App;

/*
<InfoProduct />
      <ProductStyles />
      <ProductSizes />
      <CheckBag />
*/
