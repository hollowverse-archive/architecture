import { ArchitecturalComponent, Link } from '../types';
import vis from 'vis';

export const colors = {
  blue: '#0074D9',
  green: '#2ECC40',
};

export function convertToVisNode({
  name,
  id,
}: ArchitecturalComponent): vis.NodeOptions {
  return {
    id: id,
    label: name,
    borderWidth: 0,
    borderWidthSelected: 1,
    color: {
      background: 'white',
      highlight: '#DDDDDD',
    },
  };
}

export function convertToVisEdge(link: Link): vis.EdgeOptions {
  const [to, from, options] = link;

  return {
    from: from.id,
    to: to.id,
    ...options,
  };
}

export function enhanceLink(link: Link): Link {
  const [from, to, options] = link;

  return [
    from,
    to,
    {
      id: `${from.id}-${to.id}`,
      ...options,
    },
  ];
}
