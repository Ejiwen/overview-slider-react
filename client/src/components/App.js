import React, { useState, useEffect, createContext } from 'react';
import $ from 'jquery';
import GaleryComponent from './GaleryComponent';
import RatingComponent from './RatingComponent.js';
import InfoProduct from './InfoProduct.js';
import ProductStyles from './ProductStyles.js';
import ProductSizes from './ProductSizes.js';
import CheckBag from './CheckBag.js';
import SocialShare from './SocialShare.js';
import { ImArrowLeft, ImArrowRight } from 'react-icons/im';
import { Container, RightSide, Navbar } from './styles/Container.style';
import axios from 'axios';
export const InfoContext = createContext();
const App = () => {
  const [styleIndex, setStyleIndex] = useState(0);
  const [toggleWiden, setToggleWiden] = useState(true);
  const [infoContext, setInfoContext] = useState({});
  useEffect(() => {
    axios
      .get('/product')
      .then((res) => {
        setInfoContext({
          category: res.data.category,
          name: res.data.name,
          price: res.data.default_price,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const changeStyle = (styleid) => {
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
    <InfoContext.Provider value={infoContext}>
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
            <RatingComponent id="RatingComponent" />
            <InfoProduct data-testid="InfoProduct" />
            <ProductStyles
              data-testid="ProductStyles"
              productID="25167"
              changeStyle={changeStyle}
            />
            <ProductSizes
              data-testid="ProductSizes"
              productID="25167"
              styleIndex={styleIndex}
            />
            <CheckBag data-testid="CheckBag" />
            <SocialShare data-testid="SocialShare" />
          </RightSide>
        </Container>
      </div>
    </InfoContext.Provider>
  );
};

export default App;
//<ImArrowRight style={{ color: 'white' }} />
