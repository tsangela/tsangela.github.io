import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { EyeOutlined } from '@ant-design/icons';

import Header from '../components/header';
import { InnerContainer } from '../components/styled';
import theme from '../resources/theme.json';
import { OutlineButton } from '../components/buttons';

const animation = {
  opacity: 0,
  y: -40,
  type: 'from',
  ease: 'easeOutQuad',
};

function About(props) {
  const { data } = props;
  const { id, title, portrait, biography, resume } = data;
  return (
    <Container id={id}>
      <InnerContainer>
        <OverPack>
          <Header>{title}</Header>
          <TweenOne key="profile" animation={animation}>
            <Profile>
              <Portrait src={portrait} alt="angela tsang's portrait" />
              <Biography>
                {biography}
                <a
                  href={resume.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  alt={'open resume in a new tab'}
                >
                  <OutlineButton
                    icon={<EyeOutlined />}
                    color={theme.thistle}
                    size="large"
                  >
                    resume
                  </OutlineButton>
                </a>
              </Biography>
            </Profile>
          </TweenOne>
        </OverPack>
      </InnerContainer>
    </Container>
  );
}

const Container = styled.div`
  // background: linear-gradient(135deg, ${theme.thistle}, ${theme.secondary});
  background: ${lighten(0.2, theme.thistle)};
  min-height: 100%;
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

const Biography = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 300px;
  width: 50%;
  margin: 32px;
  padding: 0 16px 24px 16px;

  border-top: 1px solid black;
  border-bottom: 1px solid black;
  color: black;

  p {
    line-height: 1.5;
    letter-spacing: 1.5px;
    text-shadow: 0 0 10px white;
  }
`;

export default About;
