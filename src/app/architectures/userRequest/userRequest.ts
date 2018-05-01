import { browser, user } from 'architectures/components/components';
import { userBrowser } from './links';

export const userRequest = {
  name: 'User request',
  components: [user, browser],
  links: [userBrowser],
};
