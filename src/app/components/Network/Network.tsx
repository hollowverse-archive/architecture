import React from 'react';
import vis from 'vis';
import { Card } from 'reactstrap';

import css from './Network.module.scss';

export class Network extends React.Component<
  {
    nodes: vis.NodeOptions[];
    edges: vis.EdgeOptions[];
    onClick: any;
  },
  {}
> {
  container: HTMLDivElement | null = null;

  getOptions = (): vis.Options => ({
    autoResize: true,
    clickToUse: true,
    width: '100%',
    height: '100%',
  });

  componentDidMount() {
    const nodes = new vis.DataSet();
    const edges = new vis.DataSet();

    nodes.add(this.props.nodes);
    edges.add(this.props.edges);

    const data = {
      nodes: nodes,
      edges: edges,
    };

    // tslint:disable-next-line:no-non-null-assertion no-unused-expression
    const network = new vis.Network(this.container!, data, {});

    network.on('click', params => {
      this.props.onClick(params);
    });
  }

  setContainerRef = (ref: any) => {
    this.container = ref;
  };

  render() {
    return (
      <Card className={css.root}>
        <div
          style={{ height: this.props.nodes.length * 100 }}
          className={css.content}
          ref={this.setContainerRef}
        />
      </Card>
    );
  }
}
