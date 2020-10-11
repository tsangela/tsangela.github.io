import React, { useState } from 'react';
import styled from 'styled-components';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import Header from '../components/header';
import Card from '../components/card';
import Modal from '../components/modal';
import { SvgBackground } from '../components/svg-backgrounds';

const animation = {
  opacity: 0,
  scale: 0.7,
  type: 'from',
  ease: 'easeOutQuad',
};

function Projects(props) {
  const [selectedItem, setSelectedItem] = useState();
  const { isMobile, data } = props;

  return (
    <Container id={data.id}>
      <SvgBackground />
      <OverPack>
        <Header>{data.title}</Header>
        <ProjectsWrapper key="project-cards" animation={animation}>
          {data.items.map((item) => (
            <Card
              key={item.title}
              isMobile={isMobile}
              item={item}
              setSelectedItem={setSelectedItem}
            >
              {item.description}
            </Card>
          ))}
        </ProjectsWrapper>
        {selectedItem && (
          <Modal
            isMobile={isMobile}
            item={selectedItem}
            setItem={setSelectedItem}
          />
        )}
      </OverPack>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  padding: 64px;
`;

const ProjectsWrapper = styled(TweenOne)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export default Projects;
