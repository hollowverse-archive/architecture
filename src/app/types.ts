import vis from 'vis';

export type ArchitectureComponent = {
  id: string;
  name: string;
  documentation: string;
};

export type Link =
  | {
      id: string;
      from: ArchitectureComponent;
      to: ArchitectureComponent;
      documentation: string;
    }
  | Partial<vis.EdgeOptions>;

export type Architecture = {
  name: string;
  components: ArchitectureComponent[];
  links: Link[];
};

export type Architectures = {
  [name: string]: Architecture;
};
