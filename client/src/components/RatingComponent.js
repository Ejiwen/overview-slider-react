import React from 'react';
import { BsFillStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const RatingComponent = () => {
  return (
    <div style={{ margin: '10px 0' }}>
      <BsFillStarFill />
      <BsFillStarFill />
      <BsFillStarFill />
      <BsStarHalf /> <BsStar />
      <span
        style={{
          textDecoration: 'underline',
          fontSize: '0.8rem',
          marginLeft: '10px',
        }}
      >
        Read all reviews
      </span>
    </div>
  );
};

export default RatingComponent;
