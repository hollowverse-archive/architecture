import { browser, user } from 'architectures/components/components';
import userBrowsermd from './userBrowser.md';
import { Link } from 'types';

export const userBrowser: Link = {
  id: 'user-browser',
  from: user,
  to: browser,
  documentation: userBrowsermd,
  arrows: 'to, from',
};
