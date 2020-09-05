import React, { useState } from 'react';
import styled from 'styled-components';
import {
  GlobalOutlined,
  CodeOutlined,
  LinkOutlined,
  DownloadOutlined,
} from '@ant-design/icons';

import { FilledButton } from '../buttons';
import { Tag } from '../styled';
import { linkTypes } from '../../resources/data';
import theme from '../../resources/theme.json';
import generic from '../../resources/images/previews/generic-image.png';

const formatDate = (date) =>
  date && (date.end ? `${date.start} - ${date.end}` : date.start);

const getIcon = (type) => {
  switch (type) {
    case linkTypes.demo:
      return <GlobalOutlined />;
    case linkTypes.code:
      return <CodeOutlined />;
    case linkTypes.download:
      return <DownloadOutlined />;
    default:
      return <LinkOutlined />;
  }
};

const renderButtons = (links) =>
  Object.keys(links).map((type) => (
    <a
      key={type}
      href={links[type]}
      target="_blank"
      rel="noopener noreferrer"
      alt={`go to ${type}`}
    >
      <FilledButton icon={getIcon(type)} size="small" color={theme.tertiary}>
        {type}
      </FilledButton>
    </a>
  ));

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
      <Preview src={image || generic} alt={`${title} preview`} />
      <Expandable aria-expanded={hovered}>
        <ContentWrapper>
          <CardTitle>{title}</CardTitle>
          <Tag>{formatDate(date)}</Tag>
          <p>{children}</p>
          <ButtonsWrapper>{renderButtons(links)}</ButtonsWrapper>
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
  max-height: 40px;

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

  p {
    margin: 8px 0;
  }

  &:hover {
    overflow: scroll;
  }
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: inline-grid;
  grid-gap: 4px;
  grid-auto-flow: column;
  justify-content: center;
`;

const Preview = styled.img`
  width: 100%;
  height: 100%;
  // max-height: 256px;
  object-position: top;
  object-fit: cover;
`;

const CardTitle = styled.h2`
  margin: 0 0 8px 0;
  font-size: large;
`;

export default Card;
