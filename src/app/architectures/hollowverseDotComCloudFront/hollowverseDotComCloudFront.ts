import {
  browser,
  user,
  awsRoute53,
  hollowverseDotComCloudFront,
} from 'architectures/components/components';
import {
  userBrowser,
  browserAwsRoute53,
  browserHollowverseDotComCloudFront,
} from './links';

export const hollowverseDotComCloudFront = {
  name: 'User request',
  components: [user, browser, awsRoute53, hollowverseDotComCloudFront],
  links: [userBrowser, browserAwsRoute53, browserHollowverseDotComCloudFront],
};
