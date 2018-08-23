import React from 'react';
import './Loading.css';

const Loading = (props) => {
  const { width, height } = props;

  return <div className="Loading" style={{ width, height   }} />
}

export default Loading;
