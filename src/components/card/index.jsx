import React, { useState } from 'react';
import styled from 'styled-components';
import { GlobalOutlined, CodeOutlined } from '@ant-design/icons';

import theme from '../../resources/theme.json';
import { FilledButton } from '../buttons';

const formatDate = (date) =>
  date && (date.end ? `${date.start} - ${date.end}` : date.start);

function Card(props) {
  const [hovered, setHovered] = useState(false);

  const { isMobile, item, children } = props;
  const { title, date, image, links } = item;

  return (
    <CardDiv
      mobile={isMobile}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Preview src={image} alt={`${title} preview`} />
      <Expandable aria-expanded={hovered}>
        <ContentWrapper>
          <CardTitle>{title}</CardTitle>
          <Subtitle>{formatDate(date)}</Subtitle>
          <p>{children}</p>
          <ButtonsWrapper>
            <a
              href={links.live}
              alt="live preview"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FilledButton
                size="small"
                color={theme.tertiary}
                icon={<GlobalOutlined />}
              >
                demo
              </FilledButton>
            </a>
            <a
              href={links.code}
              alt="code repository"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FilledButton
                size="small"
                color={theme.tertiary}
                icon={<CodeOutlined />}
              >
                code
              </FilledButton>
            </a>
          </ButtonsWrapper>
        </ContentWrapper>
      </Expandable>
    </CardDiv>
  );
}

const Expandable = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 1;

  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: 44px;

  background: rgba(255, 255, 255, 1);
  overflow: hidden;
  line-height: 1.5;

  transition: 0.3s ease;
`;

const CardDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  margin: 8px;
  height: 300px;

  background: white;
  border-radius: 4px;
  overflow: hidden;

  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  transition: 0.2s ease;

  &:hover {
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);

    ${Expandable} {
      max-height: 100%;
      background: rgba(255, 255, 255, 0.9);
      justify-content: center;
    }
  }
`;

const ContentWrapper = styled.div`
  padding: 8px 16px;
  text-align: center;

  &:hover {
    overflow: scroll;
  }
`;

const ButtonsWrapper = styled.div`
  width: 164px;
  max-width: 100%;
  display: inline-grid;
  grid-gap: 4px;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
`;

const Preview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardTitle = styled.h2`
  margin-top: 0;
  font-size: large;
`;

const Subtitle = styled.span`
  background: ${theme.secondary};
  color: white;
  font-size: small;
  padding: 4px;
  border-radius: 2px;
`;

export default Card;
