import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import { imageFor } from '../utils';

const styles = StyleSheet.create({
  wrapper: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 5,
    flexDirection: 'row',
    marginHorizontal: 5,
  },
  titleText: {
    fontFamily: 'Roboto-Regular',
    color: 'white',
    backgroundColor: 'red',
    padding: 5,
    fontSize: 12
  },
  image: {
    resizeMode: 'stretch',
    height: 75,
    flex: 1,
  },
  infoContainer: {
    flex: 2,
    marginLeft: 5,
  },
  titleContainer: {
    flexDirection: 'row',
    marginRight: 5,
  },
  headerText: {
    fontFamily: 'Roboto-Medium',
    color: 'black',
    fontSize: 13,
  },
  headerContainer: {
    marginVertical: 5,
    marginRight: 5
  },
  space: {
    flex: 1,
  },
  dateContainer: {
    marginBottom: 5,
  },
  dateText: {
    fontFamily: 'Roboto-Light',
    color: 'black',
    fontSize: 10
  },
  iconSunday: {
    width: 40,
    resizeMode: 'contain'
  }
});


export default class StoryRow extends Component {
  static propTypes = {
    data: PropTypes.any.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const data = this.props.data.toJS();
    let titleStyle = styles.titleText;
    if (data.category === 'Sports') {
      titleStyle = [styles.titleText, { backgroundColor: '#F00F25' }];
    } else if (data.category === 'Entertainment') {
      titleStyle = [styles.titleText, { backgroundColor: '#DE7700' }];
    } else if (data.category === 'News') {
      titleStyle = [styles.titleText, { backgroundColor: '#0176AD' }];
    }
    return (
      <View style={styles.wrapper}>
        <Image source={imageFor(data.pictureURI)} style={styles.image} />
        <View style={styles.infoContainer}>
          <View style={styles.titleContainer}>
            <Text style={titleStyle} numberOfLines={10}>
              {data.category}
            </Text>
            <View style={styles.space} />
            {data.sundayPlus && <Image
              style={styles.iconSunday}
              source={require('../assets/images/icon_sunday.png')} />}
          </View>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>
              {data.headline}
            </Text>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>
              {data.date}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
