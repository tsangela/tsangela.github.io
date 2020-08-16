import styled from 'styled-components';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import theme from '../../resources/theme.json';

export const PaddingOverPack = styled(OverPack)`
  padding: 32px;
`;

export const Highlight = styled.span`
  background: ${(props) => props.color || theme.primary};
`;
