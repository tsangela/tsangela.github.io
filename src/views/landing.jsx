import React from 'react';
import styled, { css } from 'styled-components';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import Texty from 'rc-texty';
import Link from 'rc-scroll-anim/lib/ScrollLink';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import { SvgBackground } from '../components/svg-backgrounds';
import { IconButton } from '../components/buttons';
import { idMap } from '../resources/data';
import theme from '../resources/theme.json';
import { ReactComponent as Laptop } from '../resources/images/backgrounds/laptop.svg';

const renderLinks = (isMobile) =>
  Object.keys(idMap).map((key) => {
    const id = idMap[key].id;
    const icon = idMap[key].icon;
    return (
      <LinkWrapper mobile={isMobile}>
        <HoverLink key={id} to={id} toHash={false}>
          <IconButton icon={icon} aria-label={`go to ${id} section`} />
        </HoverLink>
        <LinkTitle key={`${id}-title`}>{id}</LinkTitle>
      </LinkWrapper>
    );
  });

function Landing(props) {
  const { isMobile, data } = props;
  const animation = {
    queue: 'bottom',
    one: {
      scaleY: '+=0.3',
      opacity: 0,
      type: 'from',
      ease: 'easeOutQuad',
    },
  };
  return (
    <LandingWrapper id={data.id}>
      <OverPack playScale={0.3} style={{ width: '100%' }}>
        <SvgBackground />
        <ContentWrapper mobile={isMobile}>
          <ImageWrapper
            key="img"
            animation={animation.one}
            mobile={isMobile}
            resetStyle
          >
            <Laptop role="img" alt="landing image" />
          </ImageWrapper>
          <TextWrapper mobile={isMobile}>
            <QueueAnim
              type={animation.queue}
              key="intro"
              leaveReverse
              ease={['easeOutQuad', 'easeInQuad']}
            >
              <Header key="intro-header">
                <span>
                  <Texty top="top" mode="smooth">
                    {data.title}
                  </Texty>
                </span>
              </Header>

              <Intro key="intro-text">{data.text}</Intro>

              <LinksRow key="links">{renderLinks(isMobile)}</LinksRow>
            </QueueAnim>
          </TextWrapper>
        </ContentWrapper>
      </OverPack>
    </LandingWrapper>
  );
}

const LandingWrapper = styled.div`
  background: ${theme.background};
  position: relative;
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;

  width: 100%;
  flex-wrap: wrap;

  ${(props) =>
    props.mobile
      ? css`
          flex-direction: column;
        `
      : css`
          flex-direction: row-reverse;
        `}
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  width: 30%;

  ${(props) =>
    props.mobile
      ? css`
          text-align: center;
        `
      : css`
          margin-left: 20px;
        `}
`;

const Header = styled.h1`
  span {
    background: black;
    color: white;
  }
`;

const Intro = styled.p`
  line-height: 1.8;
`;

const ImageWrapper = styled(TweenOne)`
  width: 50%;
  margin: -48px;

  ${(props) =>
    props.mobile &&
    css`
      min-width: 400px;
      width: 70%;
      margin: -84px;
    `}
`;

const LinksRow = styled.div`
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

  background: linear-gradient(to right, ${theme.primary}, ${theme.tertiary});
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

export default Landing;
