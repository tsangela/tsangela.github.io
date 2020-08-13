import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import { BaseButton } from '../style';

function FilledButton(props) {
  const { color, handleClick, children } = props;
  return (
    <StyledFilledButton color={color} onClick={handleClick}>
      {children}
    </StyledFilledButton>
  );
}

const StyledFilledButton = styled(BaseButton)`
  background: ${(props) => props.color};
  color: white;

  &:hover {
    border-color: ${(props) => lighten(0.05, props.color)};
    background: ${(props) => lighten(0.05, props.color)};
  }
`;

export default FilledButton;
