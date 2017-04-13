/**
 * Row Styling Project for Thinkspan
 * @flow
 */

import React from 'react';
import { AppRegistry } from 'react-native';

import { fromJS } from 'immutable';

import ListContainer from './containers';

import data from './data';

export default class RowStyling extends React.PureComponent {
  render() {
    return (
      <ListContainer data={fromJS(data)} />
    );
  }
}

AppRegistry.registerComponent('RowStyling', () => RowStyling);
