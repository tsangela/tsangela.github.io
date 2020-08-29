import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Shapes } from '../../resources/images/backgrounds/shapes.svg';

function Divider() {
  return (
    <DividerWrapper>
      <Shapes />
    </DividerWrapper>
  );
}

export default Divider;

const DividerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  svg {
    min-width: 100px;
    width: 10%;
    height: auto;
  }
`;
