import React from 'react';
import styled from 'styled-components';

const Aavatar = styled.img`
  margin-top: 3px;
  width: 120px;
  height: 120px;
  border-radius: 3px;
`;
 
export default (props) => {
  return (
    <Aavatar {...props} />
  );
};