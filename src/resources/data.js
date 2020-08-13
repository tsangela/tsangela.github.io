import React from 'react';
import theme from './theme.json';

export const landingData = {
  id: 'landing',
  title: 'hello, world!',
  text:
    "thanks for dropping by! here, you will find all the tech-y stuff i've been working on.",
  button: {
    color: theme.secondary,
    children: 'see more',
  },
};

export const projectsData = {
  id: 'projects',
  items: [
    {
      id: 'test',
      technologies: ['react', 'mongodb'],
      title: 'test',
      description: 'test test',
      image:
        'https://cdn.pixabay.com/photo/2017/05/09/13/33/laptop-2298286_1280.png',
    },
  ],
};
