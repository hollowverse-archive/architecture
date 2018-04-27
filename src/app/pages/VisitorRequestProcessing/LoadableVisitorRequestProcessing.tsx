import loadable from 'react-loadable';
import { loadableDefaultOptions } from 'helpers/loadableDefaultOptions';

export const LoadableVisitorRequestProcessing = loadable({
  ...loadableDefaultOptions,
  loader: async () =>
    import('./VisitorRequestProcessing').then(
      module => module.VisitorRequestProcessing,
    ),
});
