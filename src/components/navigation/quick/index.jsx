import React from 'react';
import styled from 'styled-components';
import Link from 'rc-scroll-anim/lib/ScrollLink';

import { IconButton } from '../../buttons';
import { idMap } from '../../../resources/data';
import theme from '../../../resources/theme.json';

const renderLinks = (isMobile) =>
  Object.keys(idMap).map((key) => {
    const { id } = idMap[key];
    const { icon } = idMap[key];
    return (
      <LinkWrapper key={`${id}-nav-item`} mobile={isMobile}>
        <HoverLink key={id} to={id} toHash={false}>
          <IconButton icon={icon} aria-label={`go to ${id} section`} />
        </HoverLink>
        <LinkTitle key={`${id}-title`}>{id}</LinkTitle>
      </LinkWrapper>
    );
  });

function QuickNavigation(props) {
  const { isMobile } = props;

  return <LinksGrid key="links">{renderLinks(isMobile)}</LinksGrid>;
}

const LinksGrid = styled.div`
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
`;

const LinkTitle = styled.span`
  transition: 0.2s ease-out;
  visibility: hidden;
  opacity: 0;

  text-align: center;
  font-size: small;
  margin: 4px;
  padding: 2px 6px;
  border-radius: 100px;

  background: linear-gradient(to right, ${theme.primary}, ${theme.thistle});
  color: white;
  // text-shadow: 0 0 10px #a7d0e8;
`;

const HoverLink = styled(Link)`
  &:hover ~ ${LinkTitle} {
    visibility: visible;
    opacity: 1;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default QuickNavigation;
