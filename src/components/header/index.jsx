import React from 'react';
import styled from 'styled-components';
import TweenOne from 'rc-tween-one';

import Divider from '../divider';

const animation = {
  opacity: 0,
  y: 40,
  type: 'from',
  ease: 'easeOutQuad',
};

function Header(props) {
  const { children } = props;
  return (
    <TweenOne key="header" animation={animation}>
      <Title>{children}</Title>
      <Divider />
    </TweenOne>
  );
}

export default Header;

const Title = styled.h1`
  margin-top: 0;
  text-align: center;
`;
