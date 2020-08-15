import React from 'react';
import styled from 'styled-components';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import Card from '../components/card';
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
      <ProjectsWrapper>
        {data.items.map((item) => (
          <TweenOne key={item.title} animation={animation} resetStyle>
            <Card isMobile={isMobile} item={item}>
              {item.description}
            </Card>
          </TweenOne>
        ))}
      </ProjectsWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

const ProjectsWrapper = styled(OverPack)`
  padding: 32px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export default Projects;
