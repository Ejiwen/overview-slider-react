import React, { useState, useEffect } from 'react';
import GaleryComponent from './GaleryComponent'
import axios from 'axios';

const App = () => {

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/', {
    headers: {
      Authorization: `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`
    }
    })
    .then((res) => {
      console.log(res.data)
    })
    .catch((error) => {
      console.error(error)
    })
  });


  return (
    <div>
      <h1>hi from here</h1>
      <GaleryComponent />
    </div>
  );
}

export default App;