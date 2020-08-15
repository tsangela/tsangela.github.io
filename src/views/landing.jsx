import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'rc-scroll-anim/lib/ScrollLink';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';

import { SvgBackground } from '../components/svg-backgrounds';
import { PopButton } from '../components/buttons';
import theme from '../resources/theme.json';
import { ReactComponent as Laptop } from '../resources/images/laptop.svg';

function Landing(props) {
  const { isMobile, data } = props;
  const animation = {
    queue: 'bottom',
    one: {
      scaleY: '+=2',
      opacity: 0,
      type: 'from',
      ease: 'easeOutQuad',
    },
  };
  return (
    <LandingWrapper id={data.id}>
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
            key="text"
            leaveReverse
            ease={['easeOutQuad', 'easeInQuad']}
          >
            <Header key="h1">
              <span>{data.title}</span>
            </Header>
            <Intro key="p">{data.text}</Intro>
            <Link key="projects" to="projects" toHash={false}>
              <PopButton color={data.button.color} size="large">
                {data.button.children}
              </PopButton>
            </Link>
          </QueueAnim>
        </TextWrapper>
      </ContentWrapper>
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
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  font-weight: normal;

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
      margin: -64px;
    `}
`;

export default Landing;
