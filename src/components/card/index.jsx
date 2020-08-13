import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

import theme from '../../resources/theme.json';

function Card(props) {
  const { title, subtitle, children } = props;
  return (
    <CardDiv>
      <h4>{title}</h4>
      <Subtitle>{subtitle}</Subtitle>
      <p>{children}</p>
    </CardDiv>
  );
}

const CardDiv = styled.div`
  background: white;
  border-radius: 10px;
  padding: 12px;
  max-width: 50%;
  min-width: 100px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  transition: 0.2s ease;

  &:hover {
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
  }
`;

const Subtitle = styled.span`
  color: ${theme.secondary};
`;

export default Card;
