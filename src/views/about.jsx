import React from 'react';

import Header from '../components/header';
import { PaddingOverPack } from '../components/globals';
import { SvgBackground } from '../components/svg-backgrounds';

function About(props) {
  const { isMobile, data } = props;
  return (
    <PaddingOverPack>
      <Header>{data.title}</Header>
      <div style={{ height: '600px' }} />
    </PaddingOverPack>
  );
}

export default About;
