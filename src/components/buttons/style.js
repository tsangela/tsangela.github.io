import styled, { css } from 'styled-components';
import { lighten, darken, transparentize } from 'polished';

const BaseButton = styled.button`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  padding: 8px 24px;
  padding: ${(props) => (props.size === 'small' ? '4px 12px' : '8px 24px')};
  border-radius: 100px;
  border: 1px solid ${(props) => props.color};
  white-space: nowrap;

  font-size: ${(props) => props.size};
  text-shadow: 0 0 6px rgba(255, 255, 255, 0.2);
  box-shadow: 0px 2px 4px ${(props) => lighten(0.1, props.color)};

  transition: 0.2s ease;
`;

export const StyledFilledButton = styled(BaseButton)`
  background: ${(props) => props.color};
  color: white;

  &:hover {
    border-color: ${(props) => lighten(0.05, props.color)};
    background: ${(props) => lighten(0.05, props.color)};
  }
`;

export const StyledOutlineButton = styled(BaseButton)`
  background: transparent;
  color: ${(props) => props.color};

  &:hover {
    background: ${(props) => props.color};
    color: white;
  }
`;

export const StyledPopButton = styled(StyledFilledButton)`
  box-shadow: 0 12px 12px ${(props) => transparentize(0.4, props.color)};
  font-size: large;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 12px ${(props) => transparentize(0.4, props.color)};
  }
`;

export const StyledGhostButton = styled(BaseButton)`
  background: white;
  border-color: white;
  color: ${(props) => props.color};
  font-size: large;
  box-shadow: 0 12px 12px ${(props) => props.color};

  &:hover {
    box-shadow: 0 12px 12px ${(props) => darken(0.1, props.color)};
  }
`;

const mediumIcon = css`
  font-size: 32px;
  width: 60px;
  height: 60px;
`;

const largeIcon = css`
  font-size: 48px;
  width: 80px;
  height: 80px;
`;

export const StyledIconButton = styled.button`
  cursor: pointer;
  border: none;

  ${(props) => (props.size === 'large' ? largeIcon : mediumIcon)}
  border-radius: 100%;

  background: white;
  color: ${(props) => props.color};
  box-shadow: 0 6px 12px ${(props) => transparentize(0.5, props.color)};

  transition: 0.2s ease-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ButtonIcon = styled.span`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 6px;
`;

export const ContentWrapper = styled.span`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
