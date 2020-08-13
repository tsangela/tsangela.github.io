import React from 'react';
import styled, { css } from 'styled-components';

import Button from '../components/button';
import theme from '../resources/theme.json';
import { ReactComponent as Laptop } from '../resources/images/laptop.svg';

function Landing(props) {
  const { isMobile } = props;

  return (
    <LandingWrapper>
      <ContentWrapper>
        <LandingImage role='img' alt='landing image' mobile={isMobile} />
        <TextWrapper mobile={isMobile}>
          <Header>
            <span>hello, world!</span>
          </Header>
          <Intro>
            thanks for dropping by! here, you will find all the tech-y stuff
            i've been working on.
          </Intro>
          <div>
            <Button color={theme.secondary}>see more</Button>
          </div>
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

const Intro = styled.span`
  line-height: 1.8;
  margin: 0 0 20px 0;
`;

const LandingImage = styled(Laptop)`
  min-width: 300px;
  width: 55%;

  ${(props) =>
    props.mobile &&
    css`
      min-width: 400px;
      width: 65%;
      margin: -52px 0;
    `}
`;

export default Landing;
