import React from 'react';

const bgColor = '#F8FAF5';

export const SuccessPage = () => {
  return (
    <div className="card">
      <div
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
      </p>
    </div>
  );
};
