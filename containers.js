import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';

import * as RowRenderers from './rows';

const cs = StyleSheet.create({
  wrapper: {
    marginTop: 30,
    height: Dimensions.get('window').height - 30,
    width: Dimensions.get('window').width,
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
  headerWrapper: {
  },
  headerText: {
    fontSize: 14,
  }
});

function route(type) {
  const map = {
    n_type_person: 'PersonRow',
    n_type_story: 'StoryRow'
  };
  return map[type] || 'Row1';
}

export default class ListContainer extends React.Component {

  render() {
    const rows = this.props.data.map((i) => {
      const componentName = route(i.get('$type'));
      const Row = RowRenderers[componentName];
      return <Row key={i.get('id')} data={i} />;
    });
    return (
      <View style={cs.wrapper}>
        <View style={cs.headerWrapper}>
          <Text style={cs.headerText}>List Container:</Text>
        </View>
        <ScrollView>
          {rows}
        </ScrollView>
      </View>
    );
  }
}

ListContainer.propTypes = {
  data: React.PropTypes.object.isRequired,
};
