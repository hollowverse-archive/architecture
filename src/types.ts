export type Relationship = [Component, { upLink: string; downLink: string }];

export type Component = {
  name: string;
  description?: string;
  relationships?: Relationship[];
};
