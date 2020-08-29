import React from 'react';
import styled from 'styled-components';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import Header from '../components/header';
import { SvgBackground } from '../components/svg-backgrounds';
import { ViewContainer } from '../components/styled';
import theme from '../resources/theme.json';

const animation = {
  opacity: 0,
  y: -40,
  type: 'from',
  ease: 'easeOutQuad',
};

function About(props) {
  const { data } = props;
  return (
    <Container id={data.id}>
      <OverPack>
        <SvgBackground />
        <Header>{data.title}</Header>
        <TweenOne key="profile" animation={animation}>
          <Profile>
            <Portrait src={data.portrait} alt="angela tsang's portrait" />
            <Biography>{data.biography}</Biography>
          </Profile>
        </TweenOne>
      </OverPack>
    </Container>
  );
}

const Container = styled(ViewContainer)`
  // background: linear-gradient(135deg, ${theme.tertiary}, ${theme.secondary});
  background: ${theme['background-secondary']};
`;

const Profile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Portrait = styled.img`
  position: relative;
  min-width: 150px;
  width: 20%;
  height: auto;
  border-radius: 100%;
  border: 5px solid white;
  // padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  transition: 0.2s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Biography = styled.p`
  min-width: 300px;
  width: 50%;
  margin-top: 32px;
  padding: 16px;

  line-height: 1.5;
  letter-spacing: 1.5px;

  border-top: 1px solid black;
  border-bottom: 1px solid black;
  color: black;
`;

export default About;
