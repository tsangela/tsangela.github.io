import React from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { Parallax } from 'rc-scroll-anim';
import Link from 'rc-scroll-anim/lib/ScrollLink';

import { idMap } from '../../../resources/data';
import theme from '../../../resources/theme.json';

function NavigationBar(props) {
  const { tab } = useSelector((state) => state.reducer);
  const { isMobile } = props;

  const renderLinks = () =>
    Object.keys(idMap).map((key) => {
      const { id } = idMap[key];
      const { icon } = idMap[key];
      return (
        <Link key={`${id}-link`} to={id} toHash>
          <NavLinkTitle active={tab === id} mobile={isMobile}>
            <NavLinkIcon>{icon}</NavLinkIcon>
            <NavLinkText>{id}</NavLinkText>
          </NavLinkTitle>
        </Link>
      );
    });

  return (
    <div>
      <Parallax
        animation={{ opacity: 1, playScale: [0.5, 1.0] }}
        style={{ opacity: 0 }}
      >
        <FixedWrapper mobile={isMobile}>
          <NavContainer>{renderLinks()}</NavContainer>
        </FixedWrapper>
      </Parallax>
    </div>
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

  &,
  ${NavLinkIcon}, ${NavLinkText} {
    transition: 0.3s ease;
  }

  &:hover {
    border-color: ${theme.primary};
  }

  ${(props) => props.active && activeStyle}
`;

export default NavigationBar;
