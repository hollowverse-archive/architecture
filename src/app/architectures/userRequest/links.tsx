import { ArchitectureLink } from 'types';
import {
  browser,
  user,
  awsRoute53,
  hollowverseDotComCloudFront,
} from 'architectures/components/components';
import userBrowsermd from './userBrowser.md';
import browserAwsRoute53md from './browserAwsRoute53.md';
import browserHollowverseDotComCloudFrontmd from './browserHollowverseDotComCloudFront.md';

const colors = {
  userBrowser: '#0074D9',
  browserAwsRoute53: '#F012BE',
};

export const userBrowser: ArchitectureLink = {
  id: 'user-browser',
  name: 'User-Browser',
  from: user,
  to: browser,
  visEdgeOptions: { arrows: 'to, from' },
};

export const browserAwsRoute53: ArchitectureLink = {
  id: 'browser-awsRoute53',
  name: 'Browser-AWS Route 53',
  from: browser,
  to: awsRoute53,
  color: colors.browserAwsRoute53,
  visEdgeOptions: {
    arrows: 'to, from',
  },
};

export const browserHollowverseDotComCloudFront: ArchitectureLink = {
  id: 'browser-hollowverseDotComCloudFront',
  name: 'Browser-hollowverse.com CloudFront',
  from: browser,
  to: hollowverseDotComCloudFront,
  color: colors.userBrowser,
  visEdgeOptions: {
    arrows: 'to, from',
  },
};
