import React, { useEffect } from 'react';
import axios from 'axios';
import GaleryComponent from './GaleryComponent';
import { Container } from './styles/Container.style';

const App = () => {
  useEffect(() => {
    axios
      .get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/', {
        headers: {
          Authorization: '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',
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <Container color="green">
      <h1>hi from here</h1>
      <GaleryComponent />
    </Container>
  );
};

export default App;
