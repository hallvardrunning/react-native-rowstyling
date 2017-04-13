import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import { imageFor } from '../utils';
import Ionicons from 'react-native-vector-icons/Ionicons';
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    resizeMode: 'cover',
  },
  avatarContainer: {
    marginLeft: 15,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#ccc',
  },
  contentcontainer: {
    flex: 1,
    height: 60,
    justifyContent: 'center',
  },
  addIconContainer: {
    marginRight: 15,
    marginLeft: 5,
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: '#0077A9',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  nameText: {
    fontFamily: 'Roboto-Regular',
    color: 'black',
    padding: 0,
    fontSize: 14
  },
  titleText: {
    fontFamily: 'Roboto-Light',
    color: '#717171',
    padding: 0,
    fontSize: 14,
  }
});


export default class PersonRow extends React.Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const data = this.props.data.toJS();
    console.info('props data', this.props.data);
    console.info('data', data);
    return (
      <View style={styles.wrapper}>
        <View style={styles.avatarContainer}>
          <Image source={imageFor('image1.png')} style={styles.image} />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.contentcontainer}>
            <Text style={styles.nameText}>
              {`${data.first_name} ${data.last_name}`}
            </Text>
            <Text style={styles.titleText} numberOfLines={2}>
              {data.title}
            </Text>
          </View>
          <View style={styles.addIconContainer}>
            <Ionicons name="md-person-add" size={20} color="#0077A9" />
          </View>
        </View>
      </View>
    );
  }
}
