import React from 'react';
import vis from 'vis';
import { Card } from 'reactstrap';
import { connect } from 'react-redux';
import { isEqual } from 'lodash';

import {
  convertToVisNode,
  convertToVisEdge,
} from 'architecturalComponents/helpers';
import { ArchitecturalComponent, Link } from 'app/types';
import { getSelectedArchitectureItem } from 'store/reducers';
import { StoreState, ActionTypeToPayloadType } from 'store/types';

import css from './Architecture.module.scss';

type StoreProps = {
  selectedArchitectureItem:
    | ActionTypeToPayloadType['SET_SELECTED_ARCHITECTURE_ITEM']
    | null;
};

type OwnProps = {
  components: ArchitecturalComponent[];
  links: Link[];
  onClick(itemId: string): any;
};

type Props = OwnProps & StoreProps;

export const Architecture = connect<StoreProps, null, OwnProps, StoreState>(
  (state: StoreState) => ({
    selectedArchitectureItem: getSelectedArchitectureItem(state),
  }),
)(
  class ArchitectureClass extends React.Component<Props> {
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
        !isEqual(
          this.props.selectedArchitectureItem,
          nextProps.selectedArchitectureItem,
        ) &&
        this.network !== null
      ) {
        if (nextProps.selectedArchitectureItem) {
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
      return props.components
        .map(convertToVisNode)
        .find(
          ({ id }) =>
            props.selectedArchitectureItem !== null &&
            props.selectedArchitectureItem.itemId === id,
        );
    };

    getSelectedEdge = (props: Props) => {
      return props.links
        .map(convertToVisEdge)
        .find(
          ({ id }) =>
            props.selectedArchitectureItem !== null &&
            props.selectedArchitectureItem.itemId === id,
        );
    };

    createArchitecture(props: Props) {
      const nodes = new vis.DataSet();
      const edges = new vis.DataSet();

      nodes.add(this.props.components.map(convertToVisNode));
      edges.add(this.props.links.map(convertToVisEdge));

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

        this.props.onClick(itemId);
      });
    }

    setContainerRef = (ref: any) => {
      this.container = ref;
    };

    render() {
      return (
        <Card className={css.root}>
          <div
            style={{ height: this.props.components.length * 100 }}
            className={css.content}
            ref={this.setContainerRef}
          />
        </Card>
      );
    }
  },
);
