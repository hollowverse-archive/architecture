import React from 'react';
import vis from 'vis';
import { Card } from 'reactstrap';

import { convertToVisNode, convertToVisEdge } from 'helpers/helpers';
import { Architecture } from 'app/types';

type Props = {
  architecture: Architecture;
  selectedItemId: string | null;
  onClick(itemId: string): any;
};

export class ArchitectureDiagram extends React.Component<Props> {
  container: HTMLDivElement | null = null;
  network: vis.Network | null = null;

  getOptions = (): vis.Options => ({
    autoResize: true,
    clickToUse: true,
    width: '100%',
    height: '100%',
  });

  componentWillReceiveProps(nextProps: Props) {
    if (
      this.props.selectedItemId !== nextProps.selectedItemId &&
      this.network !== null
    ) {
      if (nextProps.selectedItemId) {
        const selectedNode = this.getSelectedNode(nextProps);
        const selectedEdge = this.getSelectedEdge(nextProps);

        this.network.setSelection({
          nodes: selectedNode ? [selectedNode.id as string] : [],
          edges: selectedEdge ? [selectedEdge.id as string] : [],
        });
      } else {
        this.network.unselectAll();
      }
    }
  }

  componentDidMount() {
    this.createArchitecture(this.props);
  }

  getSelectedNode = (props: Props) => {
    return props.architecture.components
      .map(convertToVisNode)
      .find(({ id }) => props.selectedItemId === id);
  };

  getSelectedEdge = (props: Props) => {
    return props.architecture.links
      .map(convertToVisEdge)
      .find(({ id }) => props.selectedItemId === id);
  };

  createArchitecture(props: Props) {
    const nodes = new vis.DataSet();
    const edges = new vis.DataSet();

    nodes.add(props.architecture.components.map(convertToVisNode));
    edges.add(props.architecture.links.map(convertToVisEdge));

    const data = {
      nodes: nodes,
      edges: edges,
    };

    // tslint:disable-next-line:no-non-null-assertion no-unused-expression
    this.network = new vis.Network(this.container!, data, {});

    this.network.on('click', params => {
      const { nodes: _nodes, edges: _edges } = params;

      const itemId =
        _nodes.length > 0 ? _nodes[0] : _edges.length > 0 ? _edges[0] : null;

      props.onClick(itemId);
    });
  }

  setContainerRef = (ref: any) => {
    this.container = ref;
  };

  render() {
    return (
      <Card>
        <div
          style={{ height: this.props.architecture.components.length * 100 }}
          ref={this.setContainerRef}
        />
      </Card>
    );
  }
}