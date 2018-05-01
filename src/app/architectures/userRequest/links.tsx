import { browser, user } from 'architectures/components/components';
import userBrowsermd from './userBrowser.md';
import { ArchitectureLink } from 'types';

export const userBrowser: ArchitectureLink = {
  id: 'user-browser',
  name: 'User-Browser',
  from: user,
  to: browser,
  documentation: userBrowsermd,
  visEdgeOptions: { arrows: 'to, from' },
};
