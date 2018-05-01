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

export function convertToVisEdge(link: ArchitectureLink): vis.EdgeOptions {
  return {
    id: `${link.from.id}-${link.to.id}`,
    from: link.from.id,
    to: link.to.id,
    ...(link.visEdgeOptions || {}),
  };
}
