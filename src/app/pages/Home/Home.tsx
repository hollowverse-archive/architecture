import React from 'react';

import classes from './Home.module.scss';

import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
export const Home = hot(module)(
  connect(undefined, dispatch => ({}))(props => (
    <div className={classes.root} />
  )),
);
