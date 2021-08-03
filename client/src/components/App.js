import React, { useState } from 'react';
import $ from 'jquery';
import GaleryComponent from './GaleryComponent';
import RatingComponent from './RatingComponent.js';
import InfoProduct from './InfoProduct.js';
import ProductStyles from './ProductStyles.js';
import ProductSizes from './ProductSizes.js';
import CheckBag from './CheckBag.js';
import SocialShare from './SocialShare.js';
import { Container, RightSide, Navbar } from './styles/Container.style';

const App = () => {
  const [styleIndex, setStyleIndex] = useState(0);
  const [toggleWiden, setToggleWiden] = useState(true);

  const changeStyle = (styleid) => {
    //console.log(styleid);
    setStyleIndex(styleid);
  };

  const widenFn = () => {
    if (toggleWiden) {
      $('#RightSide').hide();
      $('#container').css('grid-template-columns', '100% 0%');
      $('#container').css('height', '85vh');
      $('.imgWiden').css('height', '85vh');
    } else {
      $('#RightSide').show();
      $('#container').css('grid-template-columns', '60% 40%');
      $('#container').css('height', '600px');
      $('.imgWiden').css('height', '600px');
    }
    setToggleWiden(!toggleWiden);
  };

  return (
    <div style={{ margin: '0 20px' }}>
      <Navbar>
        <h4
          style={{
            color: 'white',
            textDecoration: 'underline',
            fontWeight: 'bolder',
          }}
        >
          007LY
        </h4>
        <div style={{ alignSelf: 'center' }}>
          <input
            style={{
              background: 'none',
              border: 'none',
              borderBottom: '1px solid white',
            }}
          />
          <span>🔍 </span>
        </div>
      </Navbar>
      <Container id="container">
        <GaleryComponent
          id="galeryPart"
          productID="25167"
          styleIndex={styleIndex}
          widenFn={widenFn}
        />
        <RightSide id="RightSide">
          <RatingComponent />
          <InfoProduct productID="25167" />
          <ProductStyles productID="25167" changeStyle={changeStyle} />
          <ProductSizes productID="25167" styleIndex={styleIndex} />
          <CheckBag />
          <SocialShare />
        </RightSide>
      </Container>
    </div>
  );
};

export default App;

/*
<InfoProduct />
      <ProductStyles />
      <ProductSizes />
      <CheckBag />
*/
