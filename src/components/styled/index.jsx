import styled from 'styled-components';
import { lighten } from 'polished';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import theme from '../../resources/theme.json';

export const ViewContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PaddingOverPack = styled(OverPack)`
  padding: 32px;
`;

export const Highlight = styled.span`
  background: ${(props) => props.color || theme.primary};
  transition: 0.2s ease;

  &:hover {
    background: ${(props) => props.hoverColor || theme.bright};
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
