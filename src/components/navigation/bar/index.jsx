import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';

import theme from '../../../resources/theme.json';
import { idMap } from '../../../resources/data';

function NavigationBar(props) {
  const { isMobile, tab, setTab } = props;

  const renderLinks = () =>
    Object.keys(idMap).map((key) => {
      const { id, title } = idMap[key];
      const { icon } = idMap[key];
      return (
        <NavLink
          key={`${id}-link`}
          to={id}
          onClick={() => setTab(id)}
          title={title}
        >
          <NavLinkTitle active={id === tab} mobile={isMobile}>
            <NavLinkIcon>{icon}</NavLinkIcon>
            <NavLinkText>{title}</NavLinkText>
          </NavLinkTitle>
        </NavLink>
      );
    });

  return (
    <FixedWrapper mobile={isMobile}>
      <NavContainer>{renderLinks()}</NavContainer>
    </FixedWrapper>
  );
}

const FixedWrapper = styled.div`
  width: 100%;
  position: fixed;
  z-index: 1;
  display: flex;

  ${(props) =>
    props.mobile &&
    css`
      justify-content: center;
    `}
`;

const NavContainer = styled.div`
  display: flex;
  margin: 8px;
  // padding: 0 8px;

  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgb(157 182 201 / 0.2);
`;

const NavLinkText = styled.span`
  width: 0;
  margin-left: 4px;
  opacity: 0;
`;

const NavLinkIcon = styled.span``;

const activeStyle = css`
  border-color: ${theme.primary};
  max-width: 100%;

  ${NavLinkText} {
    opacity: 1;
  }
`;

const NavLinkTitle = styled.div`
  cursor: pointer;
  padding: 6px 8px;
  margin: 4px 8px;

  overflow: hidden;
  white-space: nowrap;

  max-width: 16px;
  border-bottom: 2px solid transparent;
  transition: 0.3s ease;

  &:hover {
    border-color: ${theme.primary};
  }

  ${(props) => props.active && activeStyle}
`;

export default withRouter(NavigationBar);
