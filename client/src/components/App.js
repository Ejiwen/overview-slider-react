import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [count, setCount] = useState(0);

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
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;