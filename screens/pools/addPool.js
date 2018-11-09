import React from 'react';
import { TouchableNativeFeedback, Platform, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Avatar from '../../components/ui/avatar';

class AddPool extends React.Component {

  render() {
    return (
      <View style={styles.card} key={'add'}>
        <TouchableNativeFeedback
          onPress={(event) => {  }}
          background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View style={styles.container}>
            <View style={styles.avatar}>
              <Avatar variant={'icon'} icon={'add'} color={'primary'}/>
            </View>
            <View style={styles.type}>
              <Text style={styles.title}>{'START A NEW POOL'}</Text>
              <Text style={styles.subtitle}>{'Lorem ipsum dolor sit amet'}</Text>
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = {
  card: {
    backgroundColor: '#fff',
    padding: 12,
    width: '100%',
    borderRadius: 7
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    width: '16%'
  },
  type: {
    flex: 1,
    marginLeft: 12
  },
  title: {
    fontFamily: "abel-regular",
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
    lineHeight: 20
  },
  subtitle: {
    fontFamily: "abel-regular",
    fontSize: 14,
    color: '#848484',
    lineHeight: 20
  }
};

export default connect(({routes}) => ({routes}))(AddPool)
