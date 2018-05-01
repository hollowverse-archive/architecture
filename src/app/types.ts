import vis from 'vis';

export type ArchitectureComponent = {
  id: string;
  name: string;
  documentation: string;
  visNodeOptions?: vis.NodeOptions;
};

export type ArchitectureLink = {
  id: string;
  name: string;
  from: ArchitectureComponent;
  to: ArchitectureComponent;
  documentation: string;
  visEdgeOptions?: vis.EdgeOptions;
};

export type Architecture = {
  name: string;
  components: ArchitectureComponent[];
  links: ArchitectureLink[];
};

export type Architectures = {
  [name: string]: Architecture;
};

// https://stackoverflow.com/a/46941824/604296
export type Overwrite<T1, T2> = { [P in Exclude<keyof T1, keyof T2>]: T1[P] } &
  T2;
