import React from 'react';
import styled from 'styled-components';

import Card from '../components/card';
import { SvgBackground } from '../components/svg-backgrounds';

function Projects(props) {
  const { isMobile, data } = props;
  return (
    <Container id={data.id}>
      <SvgBackground />
      <ProjectsWrapper>
        {data.items.map((item) => (
          <Card key={item.title} isMobile={isMobile} item={item}>
            {item.description}
          </Card>
        ))}
      </ProjectsWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

const ProjectsWrapper = styled.div`
  padding: 32px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export default Projects;
