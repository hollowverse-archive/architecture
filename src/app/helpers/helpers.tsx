import vis from 'vis';

import { ArchitectureComponent, ArchitectureLink } from 'app/types';

export function convertToVisNode({
  name,
  id,
  visNodeOptions = {},
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
    ...visNodeOptions,
  };
}

export function convertToVisEdge({
  from,
  to,
  visEdgeOptions = {},
}: ArchitectureLink): vis.EdgeOptions {
  return {
    id: `${from.id}-${to.id}`,
    from: from.id,
    to: to.id,
    ...visEdgeOptions,
  };
}
