import vis from 'vis';

export type ArchitecturalComponent = {
  id: string;
  icon?: string;
  name: string;
  description?: string;
  Documentation: React.ReactNode;
};

export type Link = [
  ArchitecturalComponent,
  ArchitecturalComponent,
  Partial<vis.EdgeOptions>,
  React.ReactNode
];
