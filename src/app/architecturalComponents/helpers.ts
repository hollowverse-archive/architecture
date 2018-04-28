import { ArchitecturalComponent } from '../types';
import vis from 'vis';

export const colors = {
  blue: '#0074D9',
  green: '#2ECC40',
};

export function convertToVisNode({
  name,
}: ArchitecturalComponent): vis.NodeOptions {
  return {
    id: name,
    label: name,
    borderWidth: 0,
    borderWidthSelected: 1,
    color: {
      background: 'white',
      highlight: '#DDDDDD',
    },
  };
}

export function link(
  from: vis.NodeOptions,
  to: vis.NodeOptions,
  color: string,
  description: string,
): vis.EdgeOptions & { description: string } {
  return {
    from: from.id,
    to: to.id,
    arrows: 'to',
    color: { color, highlight: color },
    description,
  };
}
