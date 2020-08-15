import React from 'react';
import theme from './theme.json';

export const landingData = {
  id: 'landing',
  title: 'hello, world!',
  text:
    "thanks for dropping by! here, you will find all the tech-y stuff i've been working on.",
  button: {
    color: theme.secondary,
    children: 'learn more',
  },
};

export const projectsData = {
  id: 'projects',
  title: 'projects',
  items: [
    {
      date: {
        start: 'May 2020',
        end: 'Present',
      },
      technologies: [
        'javascript',
        'react',
        'redux',
        'nodejs',
        'amazon s3',
        'firebase',
        'heroku',
        'graphql',
        'apollo',
        'mongodb',
        'mongoose',
        'ant.desgn',
      ],
      title: 'stylisr',
      subtitle: 'fashion network',
      description: (
        <span>
          A platform to connect <i>fashion noobies</i> to <i>fashionistas</i>.
        </span>
      ),
      contributions: [
        'Collaborated in a team of 4 people using Agile methodologies and Jira issue tracking',
        'Architected sort and filter capabilities using React Router and query parameters',
        'Implemented GraphQL APIs to query and mutate data from MongoDB store',
        'Developed a web scraper to dynamically retrieve clothing item metadata from a given URL',
      ],
      image:
        'https://cdn.pixabay.com/photo/2017/04/02/04/59/love-2195023_1280.png',
      links: {
        live: 'https://stylisr.herokuapp.com/',
        code: 'https://github.com/X-AE-A-436/styliser/',
      },
    },
    {
      date: {
        start: 'May 2020',
        end: 'July 2020',
      },
      technologies: [
        'javascript',
        'react',
        'redux',
        'nodejs',
        'mongodb',
        'heroku',
      ],
      title: 'confessions',
      subtitle: 'message board',
      description: (
        <span>
          A confession board for university students to speak their thoughts.
        </span>
      ),
      contributions: [
        'Integrated a profanity filter that coverts sensitive words to asterisks',
        'Implemented Node.js APIs to query and mutate data from MongoDB store',
        'Built a per-message voting system',
        'Configured continuous deployment on Heroku',
      ],
      image:
        'https://cdn.pixabay.com/photo/2017/04/02/04/59/love-2195023_1280.png',
      links: {
        live: 'https://uni-confessions.herokuapp.com/',
        code: 'https://github.com/tsangela/assignment-2/',
      },
    },
    {
      date: {
        start: 'July 2019',
        end: 'Dec 2019',
      },
      technologies: ['react', 'javascript', 'css', 'google places api'],
      title: 'you decide',
      subtitle: 'eatery decider',
      description: (
        <span>
          No more saying "no u!" Find a food place nearby in an instant, know
          exactly where to eat.
        </span>
      ),
      contributions: [
        'Integrated Google Places API to retrieve and display nearby food places within 1km radius',
        'Dynamically compute the distance to a food place using Haversine distance calculation',
        'Introduced random place selection to help with decision-making',
      ],
      image:
        'https://cdn.pixabay.com/photo/2017/04/02/04/59/love-2195023_1280.png',
      links: {
        live: 'https://tsangela.github.io/you-decide/',
        code: 'https://github.com/tsangela/you-decide/',
      },
    },
    {
      date: {
        start: 'Feb 2019',
        end: '',
      },
      technologies: ['react', 'javascript', 'css'],
      title: 'connect four',
      subtitle: '2-player strategy game',
      description: (
        <span>
          Childhood nostalgia... Race a friend to <i>connect four!</i>
        </span>
      ),
      image:
        'https://cdn.pixabay.com/photo/2017/04/02/04/59/love-2195023_1280.png',
      links: {
        live: 'https://tsangela.github.io/connect-four/',
        code: 'https://github.com/tsangela/connect-four/',
      },
    },
  ],
};

export const aboutData = {
  id: 'about',
  title: 'about',
  name: 'Angela Tsang',
  biography:
    "Hello, and welcome to my website! It's very nice to meet you! Let me tell you a little bit about myself... I am a 4th B.Sc. Major in Computer Science at the beautiful University of British Columbia. When I'm not click-clacking on the keyboard, I like to pet my cute lil doggos, play badminton, and go on food adventures.",
  social: {
    github: 'https://github.com/tsangela/',
    linkedin: 'https://www.linkedin.com/in/tsangela/',
    website: 'https://tsangela.github.io/',
  },
};
