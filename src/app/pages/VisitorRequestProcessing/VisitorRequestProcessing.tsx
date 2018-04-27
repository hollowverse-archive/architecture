import React from 'react';
import vis from 'vis';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { Container, Row, Col, Button } from 'reactstrap';

import css from './VisitorRequestProcessing.module.scss';

class VisitorRequestProcessingClass extends React.PureComponent<{}, {}> {
  container: any;

  // componentDidMount() {
  //   // create an array with nodes
  //   const nodes = new vis.DataSet([
  //     { id: 1, label: 'Node 1' },
  //     { id: 2, label: 'Node 2' },
  //     { id: 3, label: 'Node 3' },
  //     { id: 4, label: 'Node 4' },
  //     { id: 5, label: 'Node 5' },
  //   ]);

  //   // create an array with edges
  //   const edges = new vis.DataSet([
  //     { from: 1, to: 3 },
  //     { from: 1, to: 2 },
  //     { from: 2, to: 4 },
  //     { from: 2, to: 5 },
  //   ]);

  //   // create a network
  //   const container = document.getElementById('mynetwork');

  //   // provide the data in the vis format
  //   const data = {
  //     nodes: nodes,
  //     edges: edges,
  //   };
  //   const options = {};

  //   // initialize your network!
  //   console.log('container', this.container);
  //   if (this.container) {
  //     const network = new vis.Network(this.container, data, options);
  //   }
  // }

  setContainer = (ref: any) => {
    this.container = ref;
  };

  render() {
    return <div>Visitor request processing</div>;
  }
}

export const VisitorRequestProcessing = hot(module)(
  connect()(VisitorRequestProcessingClass),
);
