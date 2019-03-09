import React from 'react';

const Pointer = ({ children }) => {
  return React.Children.map(children, child => {
    const { style, ...other } = child.props;
    const newStyle = { ...style, cursor: 'pointer' };
    return React.cloneElement(child, { ...other, style: newStyle });
  });
};

export default Pointer;
