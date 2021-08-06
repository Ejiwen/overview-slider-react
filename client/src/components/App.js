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
export const StyleContext = createContext();

const App = () => {
  const [styleIndex, setStyleIndex] = useState(0);
  const [toggleWiden, setToggleWiden] = useState(true);
  const [infoContext, setInfoContext] = useState({});
  const [sizesContext, setSizesContext] = useState([]);

  var k = 0;
  var arr = [];
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

    var i = 0;
    var listKeys;

    axios
      .get('/styles')
      .then((res) => {
        res.data.results.map((item) => {
          listKeys = Object.keys(item.skus);
          arr.push({ id: i++, skus: item.skus });
        });
        arr = arr.filter((item) => item.id === styleIndex);
        let listKeys = Object.keys(arr[0].skus);
        listKeys.map((elm) =>
          setSizesContext((prevState) => [...prevState, arr[0].skus[elm]])
        );
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

  if (sizesContext.length < 5) {
    return <div className="App">Loading...</div>;
  }

  const twoContext = { infoContext, sizesContext };
  return (
    <InfoContext.Provider value={{ infoContext, sizesContext }}>
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
            <ProductSizes styleIndex={styleIndex} sizes={sizesContext} />
            <CheckBag data-testid="CheckBag" />
            <SocialShare data-testid="SocialShare" />
          </RightSide>
        </Container>
        {sizesContext.length > 5 && console.log(sizesContext)}
      </div>
    </InfoContext.Provider>
  );
};

export default App;
//<ImArrowRight style={{ color: 'white' }} />
