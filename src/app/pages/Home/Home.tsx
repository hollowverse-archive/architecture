import React from 'react';
import { hot } from 'react-hot-loader';

class HomeClass extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div>
        This page contains diagrams and information to help you understand the
        architectures of the various components that make up Hollowverse
      </div>
    );
  }
}

export const Home = hot(module)(HomeClass);
