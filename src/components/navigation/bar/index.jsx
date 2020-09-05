import React from 'react';
import styled, { css } from 'styled-components';
import { lighten, darken } from 'polished';
import { Parallax } from 'rc-scroll-anim';
import Link from 'rc-scroll-anim/lib/ScrollLink';

import { idMap } from '../../../resources/data';
import theme from '../../../resources/theme.json';

function NavigationBar(props) {
  const { isMobile } = props;

  const renderLinks = (isMobile) =>
    Object.keys(idMap).map((key) => {
      const id = idMap[key].id;
      const icon = idMap[key].icon;
      return (
        <Link key={`${id}-link`} to={id} toHash={true}>
          <NavLinkTitle active={props.activeTab === id} mobile={isMobile}>
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
        <FixedWrapper mobile={isMobile}>{renderLinks(isMobile)}</FixedWrapper>
      </Parallax>
    </div>
  );
}

const FixedWrapper = styled.div`
  width: 100%;
  position: fixed;
  z-index: 1;
  padding: 8px;
  display: flex;

  ${(props) =>
    props.mobile &&
    css`
      padding: 8px 0;
      justify-content: center;
    `}
`;

const NavLinkText = styled.span`
  width: 0;
  margin-left: 4px;
  opacity: 0;
`;

const NavLinkIcon = styled.span`
  // &:hover ~ ${NavLinkText} {
  // }
`;

const activeStyle = css`
  max-width: 100%;
  // background: ${lighten(0.2, theme.bright)};
  // color: ${darken(0.3, theme.bright)};
  // color: ${theme.secondary};

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
  border-radius: 100px;

  box-shadow: 0 5px 5px rgb(157 182 201 / 0.2);
  max-width: 16px;
  background: white;

  &,
  ${NavLinkIcon}, ${NavLinkText} {
    transition: 0.2s ease;
  }

  &:hover {
    ${activeStyle}
    background: #fbfbfb;
  }

  ${(props) => props.active && activeStyle}
`;

export default NavigationBar;
