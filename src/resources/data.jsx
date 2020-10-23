import React from 'react';
import {
  UserOutlined,
  PhoneOutlined,
  LaptopOutlined,
  HomeOutlined,
} from '@ant-design/icons';

import Emoji from '../components/emoji';
import { Highlight } from '../components/styled';

import theme from './theme.json';
import portrait from './images/alegna.png';
import hungryCat from './images/previews/hungry-cat.png';
import connectFour from './images/previews/connect-four.png';
import todo from './images/previews/todo.png';
import youDecide from './images/previews/you-decide-0.png';
import stylisr from './images/previews/stylisr.png';
import confessions from './images/previews/confessions-1.png';
import tinyAnalysis from './images/previews/tiny-analysis.png';
import cogitive from './images/previews/cognitive.png';
import resumePdf from './resume/angela-tsang-resume.pdf';

export const idMap = {
  landing: { id: '', icon: <HomeOutlined /> },
  projects: { id: 'projects', icon: <LaptopOutlined /> },
  about: { id: 'about', icon: <UserOutlined /> },
  contact: { id: 'contact', icon: <PhoneOutlined /> },
};

export const linkTypes = {
  code: 'code',
  demo: 'demo',
  download: 'download',
};

export const socialTypes = {
  github: 'github',
  linkedin: 'linkedin',
};

export const landingData = {
  id: idMap.landing.id,
  title: 'hello, world!',
  text:
    "thanks for dropping by! my name is angela tsang. here, i will show you all the tech-y stuff i've been working on and try to convince you to hire me.",
  button: {
    color: theme.secondary,
    children: 'see projects',
  },
};

export const projectsData = {
  id: idMap.projects.id,
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
        'ant design',
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
      image: stylisr,
      links: {
        [linkTypes.demo]: 'https://stylisr.herokuapp.com/',
        [linkTypes.code]: 'https://github.com/X-AE-A-436/styliser/',
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
      image: confessions,
      links: {
        [linkTypes.demo]: 'https://uni-confessions.herokuapp.com/',
        [linkTypes.code]: 'https://github.com/tsangela/uni-confessions/',
      },
    },
    {
      date: {
        start: 'Nov 2019',
        end: '',
      },
      technologies: ['d3.js', 'typescript'],
      title: 'tiny analysis',
      subtitle: 'java code coupling grapher',
      description: (
        <span>
          Gain a better understanding of your Java code through graphical
          visualization.
        </span>
      ),
      contributions: [
        'Leveraged static lexical analysis Java repository to highlight class coupling and code similarity',
        'Implemented class comparison analysis which calculates a code similarity score between and produces a diff of two classes',
      ],
      image: tinyAnalysis,
      links: {
        [linkTypes.code]: 'https://github.com/mehtamanan/tiny-analysis',
      },
    },
    {
      date: {
        start: 'July 2019',
        end: 'Dec 2019',
      },
      technologies: ['react', 'javascript', 'google places api'],
      title: 'you decide',
      subtitle: 'eatery decider',
      description: (
        <span>
          No more saying &quot;no u!&quot; Find a food place nearby in an
          instant, know exactly where to eat.
        </span>
      ),
      contributions: [
        'Integrated Google Places API to retrieve and display nearby food places within 1km radius',
        'Dynamically compute the distance to a food place using Haversine distance calculation',
        'Introduced random place selection to help with decision-making',
      ],
      image: youDecide,
      links: {
        [linkTypes.demo]: 'https://tsangela.github.io/you-decide/',
        [linkTypes.code]: 'https://github.com/tsangela/you-decide/',
      },
    },
    {
      date: {
        start: 'Feb 2019',
        end: '',
      },
      technologies: ['react', 'javascript'],
      title: 'connect four',
      subtitle: '2-player strategy game',
      description: (
        <span>
          Childhood nostalgia... Race a friend to <i>connect four!</i>
        </span>
      ),
      contributions: [
        'Added mouse movement tracking to render a preview of the column to drop the coin',
        'Implemented winner resolution by pre-calculating all possible winning paths',
      ],
      image: connectFour,
      links: {
        [linkTypes.demo]: 'https://tsangela.github.io/connect-four/',
        [linkTypes.code]: 'https://github.com/tsangela/connect-four/',
      },
    },
    {
      date: {
        start: 'Jan 2019',
        end: '',
      },
      technologies: ['react', 'ant design', 'javascript', 'microsoft azure'],
      title: 'bestfriendbot',
      subtitle: 'confidence-training chat bot',
      description: (
        <span>
          Train your communicative confidence the <i>cool</i> way — via chat
          bot!{' '}
          <span style={{ fontSize: 'small' }}>
            Won the Wolfram Award at nwHacks 2019 (top 20 of 132 teams).
          </span>
        </span>
      ),
      contributions: [
        "Integrated Microsoft Azure cognitive services to translate vocal input into iterative feedback of user's communication skills",
        "Built a dashboard UI that displays a descriptive summary of speaking scores to conveniently track the user's progress",
        "Placed top 20 of 132 teams and won the Wolfram Award at nwHacks 2019 (Western Canada's Largest Hackathon)",
      ],
      image: cogitive,
      links: {
        [linkTypes.code]:
          'https://github.com/nwhacksmysteriousmysteriousproject/AzureTalkToMe',
      },
    },
    {
      date: {
        start: 'Sept 2018',
        end: '',
      },
      technologies: ['java', 'xml'],
      title: 'task manager',
      subtitle: 'prioritized to-do list app',
      description: (
        <span>Prioritize your tasks, get the most out of your day.</span>
      ),
      contributions: [
        'Implemented three-tier priority feature for users to order their tasks based on importance',
        'Utilized the SharedPreferences class to save and restore tasks on reopen',
      ],
      image: todo,
      links: {
        [linkTypes.code]: 'https://github.com/tsangela/PrioritizedToDoList',
        [linkTypes.download]:
          'https://github.com/tsangela/PrioritizedToDoList/raw/master/app-release.apk',
      },
    },
    {
      date: {
        start: 'Mar 2018',
        end: 'May 2018',
      },
      technologies: ['java', 'lombok', 'junit', 'assertj'],
      title: 'hungry cat',
      subtitle: 'snake game',
      description: (
        <span>A simple snake-like game featuring a very hungry cat.</span>
      ),
      contributions: [
        'Used state design pattern to partition gameplay based on distinct game states',
        'Modelled item drop rate based on a discrete probability distribution',
        'Utilized JFrame and JPanel to create a seamless double-buffered window',
      ],
      image: hungryCat,
      links: {
        [linkTypes.code]: 'https://github.com/tsangela/HungryCat',
      },
    },
  ],
};

export const aboutData = {
  id: idMap.about.id,
  title: 'about me',
  portrait,
  biography: (
    <div>
      <p>
        Hello, my name is <Highlight>Angela Tsang</Highlight>, and welcome to my
        website! It&apos;s very nice to meet you! <Emoji emoji="✨" />
      </p>
      <p>
        I am a{' '}
        <Highlight>
          4th Year B.Sc. Major in Computer Science <Emoji emoji="🎓" />
        </Highlight>{' '}
        at the beautiful University of British Columbia 🏫. When I&apos;m not
        click-clacking on the keyboard ⌨️, I like to spend time with my cute lil
        doggos <Emoji emoji="🐕" />, play badminton <Emoji emoji="🏸" />, and go
        on food adventures <Emoji emoji="🍙" />.
      </p>
      <p>
        I am currently looking for{' '}
        <Highlight>
          full-time software engineer roles <Emoji emoji="💻" />
        </Highlight>{' '}
        starting in <Highlight>Summer 2021</Highlight>. Check out my resume
        below. Don&apos;t be shy — keep a copy for yourself <Emoji emoji="😉" />
        .
      </p>
    </div>
  ),
  resume: {
    pdf: resumePdf,
  },
};

export const contactData = {
  id: idMap.contact.id,
  title: 'contact me',
  subtitle: 'i exist in all these places:',
  socials: {
    [socialTypes.github]: 'https://github.com/tsangela/',
    [socialTypes.linkedin]: 'https://www.linkedin.com/in/tsangela/',
  },
};
