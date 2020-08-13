import React from 'react';
import styled from 'styled-components';

import { BaseButton } from '../style';

function OutlineButton(props) {
  const { color, handleClick, children } = props;
  return (
    <StyledOutlineButton color={color} onClick={handleClick}>
      {children}
    </StyledOutlineButton>
  );
}

const StyledOutlineButton = styled(BaseButton)`
  background: transparent;
  color: ${(props) => props.color};

  &:hover {
    background: ${(props) => props.color};
    color: white;
  }
`;

export default OutlineButton;
