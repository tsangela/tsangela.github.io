import React from 'react';
import styled from 'styled-components';
import TweenOne from 'rc-tween-one';
import Texty from 'rc-texty';
import { GithubFilled, LinkedinFilled, LinkOutlined } from '@ant-design/icons';

import Header from '../components/header';
import { IconButton } from '../components/buttons';
import { PaddingOverPack } from '../components/globals';
import { socialTypes } from '../resources/data';
import { ReactComponent as Message } from '../resources/images/contact.svg';
import flowers from '../resources/images/flowers.png';
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
      <TweenOne
        key="background"
        animation={animation.background}
        style={{
          position: 'relative',
          bottom: 32,
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
      <ButtonsTween key="icons" animation={animation.icon}>
        {renderSocials(data.socials)}
      </ButtonsTween>
    </Container>
  );
}

const Container = styled(PaddingOverPack)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    url(${flowers});
  background-size: contain;
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
    font-size: medium;
    text-align: center;
  }
`;

const ButtonsTween = styled(TweenOne)`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 1fr 1fr;
`;

export default Contact;
