import vis from 'vis';

export type ArchitecturalComponent = {
  id: string;
  name: string;
  Documentation: React.ReactNode;
};

export type Link =
  | {
      id: string;
      from: ArchitecturalComponent;
      to: ArchitecturalComponent;
      Documentation: React.ReactNode;
    }
  | Partial<vis.EdgeOptions>;
