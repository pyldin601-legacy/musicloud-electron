import React from 'react';
import styled from 'styled-components';

const Bold = styled.span`
  font-weight: bold;

  & .green {
    color: green;
  }
`;

const Layout = () => {
  return (
    <Bold>
      Hello, <span className="green">Mr. Green</span>.
    </Bold>
  );
};

export default Layout;
