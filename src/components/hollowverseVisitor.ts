import { Component } from '../types';
import { browser } from './browser';

export const hollowverseVisitor: Component = {
  name: 'Hollowverse visitor',
  relationships: [
    [
      browser,
      {
        upLink: 'Request content from hollowverse.com',
        downLink: 'Display hollowverse.com content',
      },
    ],
  ],
};
