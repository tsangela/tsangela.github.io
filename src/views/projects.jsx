import React from 'react';
import styled from 'styled-components';
import TweenOne from 'rc-tween-one';

import Card from '../components/card';
import Header from '../components/header';
import { PaddingOverPack } from '../components/globals';
import { SvgBackground } from '../components/svg-backgrounds';

const animation = {
  opacity: 0,
  scale: 0.7,
  type: 'from',
  ease: 'easeOutQuad',
};

function Projects(props) {
  const { isMobile, data } = props;
  return (
    <Container id={data.id}>
      <SvgBackground />
      <PaddingOverPack>
        <Header>{data.title}</Header>
        <ProjectsWrapper key="project-cards" animation={animation}>
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
`;

const ProjectsWrapper = styled(TweenOne)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export default Projects;
