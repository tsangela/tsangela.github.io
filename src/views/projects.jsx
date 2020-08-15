import React from 'react';
import styled from 'styled-components';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import Card from '../components/card';
import Divider from '../components/divider';
import { SvgBackground } from '../components/svg-backgrounds';

const animation = {
  header: {
    opacity: 0,
    y: 40,
    type: 'from',
    ease: 'easeOutQuad',
  },
  projects: {
    opacity: 0,
    scale: 0.7,
    type: 'from',
    ease: 'easeOutQuad',
  },
};

function Projects(props) {
  const { isMobile, data } = props;
  return (
    <Container id={data.id}>
      <SvgBackground />
      <PaddingOverPack>
        <TweenOne key="header" animation={animation.header}>
          <h1>{data.title}</h1>
          <Divider />
        </TweenOne>
        <ProjectsWrapper key="project-cards" animation={animation.projects}>
          {data.items.map((item) => (
            <Card key={item.title} isMobile={isMobile} item={item}>
              {item.description}
            </Card>
          ))}
        </ProjectsWrapper>
      </PaddingOverPack>
    </Container>
  );
}

const Container = styled.div`
  position: relative;

  h1 {
    margin-top: 0;
    text-align: center;
  }
`;

const PaddingOverPack = styled(OverPack)`
  padding: 32px;
`;

const ProjectsWrapper = styled(TweenOne)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin-top: 32px;
`;

export default Projects;
