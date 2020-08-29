import React from 'react';
import styled from 'styled-components';
import TweenOne from 'rc-tween-one';
import Texty from 'rc-texty';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { GithubFilled, LinkedinFilled, LinkOutlined } from '@ant-design/icons';

import Header from '../components/header';
import { IconButton } from '../components/buttons';
import { ViewContainer } from '../components/styled';
import { socialTypes } from '../resources/data';
import { ReactComponent as Message } from '../resources/images/backgrounds/contact.svg';
import flowers from '../resources/images/backgrounds/flowers.png';
import theme from '../resources/theme.json';

const animation = {
  background: {
    y: '-=20',
    yoyo: true,
    repeat: -1,
    duration: 1000,
  },
  text: {
    opacity: 0,
    y: 40,
    type: 'from',
  },
  icon: { opacity: 0, scale: 0.9, type: 'from', ease: 'easeOutQuad' },
};

const getIcon = (type) => {
  switch (type) {
    case socialTypes.github:
      return <GithubFilled />;
    case socialTypes.linkedin:
      return <LinkedinFilled />;
    default:
      return <LinkOutlined />;
  }
};

const renderSocials = (socials) =>
  Object.keys(socials).map((type) => (
    <a
      href={socials[type]}
      target="_blank"
      rel="noopener noreferrer"
      alt={`angela's ${type} profile`}
    >
      <IconButton icon={getIcon(type)} color={theme.tertiary} />
    </a>
  ));

function Contact(props) {
  const { data } = props;
  return (
    <Container id={data.id}>
      <OverPack>
        <TweenOne
          key="background"
          animation={animation.background}
          style={{
            position: 'relative',
            // bottom: 32,
          }}
        >
          <Message />
        </TweenOne>
        <Header>{data.title}</Header>
        <Subtitle key="subtitle">
          <h2>
            <Texty>{data.subtitle}</Texty>
          </h2>
        </Subtitle>
        <ButtonsRow>
          <ButtonsTween key="icons" animation={animation.icon}>
            {renderSocials(data.socials)}
          </ButtonsTween>
        </ButtonsRow>
      </OverPack>
    </Container>
  );
}

const Container = styled(ViewContainer)`
  background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.7)
    ),
    url(${flowers});
  background-size: contain;
  background-attachment: fixed;
`;

const Subtitle = styled.div`
  display: flex;
  justify-content: center;

  h2 {
    margin-top 0;
    border-radius: 2px;
    padding: 2px 4px;
    background: ${theme.light};
    width: fit-content;
    font-size: large;
    text-align: center;
  }
`;

const ButtonsRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonsTween = styled(TweenOne)`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 1fr;
  width: min-content;

  a {
    justify-self: center;
  }
`;

export default Contact;
