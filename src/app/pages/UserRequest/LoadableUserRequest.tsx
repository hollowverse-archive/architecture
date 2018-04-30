import loadable from 'react-loadable';
import { loadableDefaultOptions } from 'helpers/loadableDefaultOptions';

export const LoadableUserRequest = loadable({
  ...loadableDefaultOptions,
  loader: async () =>
    import('./UserRequest').then(module => module.UserRequest),
});
