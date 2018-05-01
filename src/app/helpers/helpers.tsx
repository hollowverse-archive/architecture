import React from 'react';
import { CommonOptions } from 'react-loadable';
import vis from 'vis';

import { ArchitectureComponent, Link } from 'app/types';
import { LoadingSpinner } from 'components/LoadingSpinner/LoadingSpinner';

export function convertToVisNode({
  name,
  id,
}: ArchitectureComponent): vis.NodeOptions {
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
  const { to, from, Documentation, ...rest } = link as any; // TODO: fix typing

  return {
    from: from.id,
    to: to.id,
    ...rest,
  };
}

export function enhanceLink(link: Partial<Link>): Link {
  const { from, to } = link as any; // TODO: fix typing

  return {
    id: `${from.id}-${to.id}`,
    ...link,
  } as any; // TODO: fix typing
}
