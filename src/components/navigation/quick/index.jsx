import React from 'react';
import styled from 'styled-components';
import { NavLink, withRouter } from 'react-router-dom';

import { IconButton } from '../../buttons';
import { idMap } from '../../../resources/data';
import theme from '../../../resources/theme.json';

const renderLinks = (isMobile, setTab) =>
  Object.keys(idMap).map((key) => {
    const { id, title } = idMap[key];
    const { icon } = idMap[key];
    return (
      <LinkWrapper key={`${id}-nav-item`} mobile={isMobile}>
        <HoverLink key={id} to={id} onClick={setTab(id)}>
          <IconButton icon={icon} aria-label={`go to ${id} section`} />
        </HoverLink>
        <LinkTitle key={`${id}-title`}>{title}</LinkTitle>
      </LinkWrapper>
    );
  });

function QuickNavigation(props) {
  const { isMobile, setTab } = props;

  return <LinksGrid key="links">{renderLinks(isMobile, setTab)}</LinksGrid>;
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

const HoverLink = styled(NavLink)`
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

export default withRouter(QuickNavigation);
