import React from 'react';

import {
  StyledFilledButton,
  StyledOutlineButton,
  StyledPopButton,
  ButtonIcon,
} from './style';
import theme from '../../resources/theme.json';

export function FilledButton(props) {
  const { icon, children, ...rest } = props;
  return (
    <StyledFilledButton {...rest}>
      <ButtonIcon>{icon}</ButtonIcon>
      {children}
    </StyledFilledButton>
  );
}

export function OutlineButton(props) {
  const { icon, children, ...rest } = props;
  return (
    <StyledOutlineButton {...rest}>
      <ButtonIcon>{icon}</ButtonIcon>
      {children}
    </StyledOutlineButton>
  );
}

export function PopButton(props) {
  const { icon, children, ...rest } = props;
  return (
    <StyledPopButton {...rest}>
      <ButtonIcon>{icon}</ButtonIcon>
      {children}
    </StyledPopButton>
  );
}

const defaultProps = {
  color: theme.primary,
  size: 'medium',
};

FilledButton.defaultProps = defaultProps;
OutlineButton.defaultProps = defaultProps;
PopButton.defaultProps = defaultProps;
