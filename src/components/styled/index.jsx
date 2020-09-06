import styled from 'styled-components';
import { lighten } from 'polished';

import theme from '../../resources/theme.json';

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
  padding: 64px 0;
`;

export const Highlight = styled.span`
  background: ${(props) => props.color || 'white'};
  transition: 0.2s ease;

  &:hover {
    background: ${(props) => props.hoverColor || theme.tertiary};
    color: white;
  }
`;

export const Tag = styled.span`
  background: ${(props) => props.color || theme.secondary};
  color: white;
  font-size: ${(props) => props.size || 'small'};
  white-space: nowrap;
  padding: 2px 4px;
  border-radius: 2px;
  transition: 0.2s ease;

  &:hover {
    background: ${(props) => lighten(0.1, props.color || theme.secondary)};
  }
`;
