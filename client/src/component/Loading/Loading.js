import React from 'react';
import './loading.css';

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading-spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    </div>
  );
};

export default Loading;
