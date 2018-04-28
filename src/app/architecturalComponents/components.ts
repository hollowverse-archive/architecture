import { convertToVisNode } from './helpers';

export const visitor = convertToVisNode({
  name: 'Visitor',
  description: 'Hollowverse visitor',
});

export const browser = convertToVisNode({
  name: 'Browser',
  description: 'Web browser',
});
