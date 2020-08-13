import React from 'react';
import styled from 'styled-components';

import Card from '../components/card';

function Projects(props) {
  const { data } = props;
  return (
    <ProjectsWrapper id={data.id}>
      {data.items.map((item) => (
        <ItemWrapper>
          <Card key={item.id} title={item.title}>
            {item.description}
          </Card>
          <img src={item.image} alt='test' />
        </ItemWrapper>
      ))}
    </ProjectsWrapper>
  );
}

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 16px;

  div,
  img {
    width: 50%;
  }
`;

export default Projects;
