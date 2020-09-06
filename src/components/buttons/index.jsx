import React from 'react';

import {
  StyledFilledButton,
  StyledOutlineButton,
  StyledPopButton,
  StyledGhostButton,
  StyledIconButton,
  ButtonIcon,
  ContentWrapper,
} from './style';
import theme from '../../resources/theme.json';

export function FilledButton(props) {
  const { icon, children, ...rest } = props;
  return (
    <StyledFilledButton {...rest}>
      <ContentWrapper>
        <ButtonIcon>{icon}</ButtonIcon>
        <span>{children}</span>
      </ContentWrapper>
    </StyledFilledButton>
  );
}

export function OutlineButton(props) {
  const { icon, children, ...rest } = props;
  return (
    <StyledOutlineButton {...rest}>
      <ContentWrapper>
        <ButtonIcon>{icon}</ButtonIcon>
        <span>{children}</span>
      </ContentWrapper>
    </StyledOutlineButton>
  );
}

export function PopButton(props) {
  const { icon, children, ...rest } = props;
  return (
    <StyledPopButton {...rest}>
      <ContentWrapper>
        <ButtonIcon>{icon}</ButtonIcon>
        <span>{children}</span>
      </ContentWrapper>
    </StyledPopButton>
  );
}

export function GhostButton(props) {
  const { icon, children, ...rest } = props;
  return (
    <StyledGhostButton {...rest}>
      <ContentWrapper>
        <ButtonIcon>{icon}</ButtonIcon>
        <span>{children}</span>
      </ContentWrapper>
    </StyledGhostButton>
  );
}

export function IconButton(props) {
  const { icon, ...rest } = props;
  return <StyledIconButton {...rest}>{icon}</StyledIconButton>;
}

const defaultProps = {
  color: theme.primary,
  size: 'medium',
};

FilledButton.defaultProps = defaultProps;
OutlineButton.defaultProps = defaultProps;
PopButton.defaultProps = defaultProps;
GhostButton.defaultProps = defaultProps;
IconButton.defaultProps = defaultProps;
