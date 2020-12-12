import React from 'react';
import {
  GlobalOutlined,
  CodeOutlined,
  LinkOutlined,
  DownloadOutlined,
} from '@ant-design/icons';

import { linkTypes } from './data';
import { FilledButton } from '../components/buttons';

export const formatDate = (date) =>
  date && (date.end ? `${date.start} - ${date.end}` : date.start);

export const getIcon = (type) => {
  switch (type) {
    case linkTypes.demo:
      return <GlobalOutlined />;
    case linkTypes.code:
      return <CodeOutlined />;
    case linkTypes.download:
      return <DownloadOutlined />;
    default:
      return <LinkOutlined />;
  }
};

const BASE_URL = process.env.PUBLIC_URL;

export const getTab = (hash) => {
  const i = hash.indexOf('/');
  return i >= 0 ? hash.substring(i + 1) : '';
};

export const constructPath = (id) => `${BASE_URL}/${id}`;

export const renderLinkButtons = (links, size, color) =>
  Object.keys(links).map((type) => (
    <a
      key={type}
      href={links[type]}
      target="_blank"
      rel="noopener noreferrer"
      alt={`go to ${type}`}
    >
      <FilledButton icon={getIcon(type)} size={size} color={color}>
        {type}
      </FilledButton>
    </a>
  ));
