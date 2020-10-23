import styled, { keyframes } from 'styled-components';
import { lighten } from 'polished';

import theme from '../../resources/theme.json';

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const zoomFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ViewContainer = styled(CenterWrapper)`
  flex-direction: column;

  position: relative;
  width: 100%;
  min-height: 100vh;
`;

export const Highlight = styled.span`
  background: ${(props) => props.color || 'white'};
  transition: 0.2s ease;

  &:hover {
    background: ${(props) => props.hoverColor || theme.thistle};
    color: white;
  }
`;

export const Tag = styled.span`
  white-space: nowrap;
  padding: 2px 4px;
  font-size: ${(props) => props.size || 'initial'};
  background: ${(props) => props.color || theme.secondary};
  color: white;

  border-radius: 2px;
  transition: 0.2s ease;

  &:hover {
    background: ${(props) => lighten(0.1, props.color || theme.secondary)};
  }
`;

export const RoundedTag = styled.span`
  white-space: nowrap;
  padding: 2px 8px;
  font-size: ${(props) => props.size || 'initial'};
  background: white;
  color: ${(props) => props.color || theme.thistle};

  border-radius: 100px;
  border: 1px solid ${(props) => props.color || theme.thistle};
  transition: 0.2s ease;

  &:hover {
    background: ${(props) => props.color || theme.thistle};
    color: white;
  }
`;
