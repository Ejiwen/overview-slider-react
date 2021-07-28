import React from 'react';
import GaleryComponent from './GaleryComponent';
import { Container, RightSide } from './styles/Container.style';

const App = () => (
  <Container>
    <GaleryComponent productID="25167" />
    <RightSide>The Right Side Components </RightSide>
  </Container>
);

export default App;
