import {
  browser,
  user,
  awsRoute53,
  hollowverseComCloudFront,
} from 'architectures/components/components';
import { Architecture } from 'types';

const colors = {
  userBrowser: '#0074D9',
  browserAwsRoute53: '#F012BE',
};

export const userRequest: Architecture = {
  name: 'User request',
  components: [user, browser, awsRoute53, hollowverseComCloudFront],
  links: {
    'user-browser': {
      name: 'User-Browser',
      from: user,
      to: browser,
      visEdgeOptions: { arrows: 'to, from' },
    },

    'browser-awsRoute53': {
      name: 'Browser-AWS Route 53',
      from: browser,
      to: awsRoute53,
      color: colors.browserAwsRoute53,
      visEdgeOptions: {
        arrows: 'to, from',
      },
    },

    'browser-hollowverseComCloudFront': {
      name: 'Browser-hollowverse.com CloudFront',
      from: browser,
      to: hollowverseComCloudFront,
      color: colors.userBrowser,
      visEdgeOptions: {
        arrows: 'to, from',
      },
    },
  },
};
