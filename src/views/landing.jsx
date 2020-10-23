import React from 'react';
import styled, { css } from 'styled-components';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import Texty from 'rc-texty';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import { SvgBackground } from '../components/svg-backgrounds';
import theme from '../resources/theme.json';
import { ReactComponent as Laptop } from '../resources/images/backgrounds/laptop.svg';

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
    parallax: {
      start: {
        position: 'unset',
      },
      end: {
        position: 'sticky',
        top: 8,
        left: 4,
        width: '300px',
      },
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
                  <Texty type="mask-top" mode="smooth">
                    {data.title}
                  </Texty>
                </span>
              </Header>

              <Intro key="intro-text">{data.text}</Intro>
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
  font-size: 18px;
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

export default Landing;
