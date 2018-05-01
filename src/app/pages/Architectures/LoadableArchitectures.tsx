import loadable from 'react-loadable';

export const LoadableArchitectures = loadable({
  loader: async () =>
    import('./Architectures').then(module => module.Architectures),
  loading: () => null,
});
