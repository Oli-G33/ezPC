import React from 'react';
import UnderConstruction from '../assets/Success-Construction.png';

const bgColor = '#F8FAF5';

export const SuccessPage = () => {
  return (
    <div>
      <img
        src={UnderConstruction}
        alt="Page under construction"
        style={{ width: 700 }}
      />
      {/* <div
        style={{
          borderRadius: 200,
          height: 200,
          width: 200,
          margin: 0,
          backgroundColor: bgColor
        }}
      >
        <i class="checkmark">✓</i>
      </div>
      <h1>Success</h1>
      <p>
        We received your purchase request;
        <br /> we'll be in touch shortly!
      </p> */}
    </div>
  );
};
